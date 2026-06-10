import fs from 'fs';
import path from 'path';
import { prisma } from '../../config/database';
import { env } from '../../config/env.config';
import { MimeCategories } from '../../config/multer.config';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
const genAI = process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'SUA_CHAVE_AQUI' 
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) 
  : null;

import { feedService } from '../feed/feed.service';

export interface UploadMetadata {
  cuidadorId: number;
  file: Express.Multer.File;
  idosoId?: number;
}

export class UploadService {
  async saveMetadata({ cuidadorId, file, idosoId }: UploadMetadata) {
    let tipoMidia: 'video' | 'imagem' | 'documento' = 'documento';
    if (MimeCategories.ALLOWED_VIDEO_MIMES.has(file.mimetype)) tipoMidia = 'video';
    else if (MimeCategories.ALLOWED_IMAGE_MIMES.has(file.mimetype)) tipoMidia = 'imagem';

    const caminhoRelativo = path.relative(
      path.join(process.cwd(), env.UPLOAD_DIR),
      file.path
    ).replace(/\\/g, '/');

    let analiseResult = null;

    if (tipoMidia === 'imagem' && genAI) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const imageBuffer = fs.readFileSync(file.path);
        const imagePart = {
          inlineData: {
            data: imageBuffer.toString("base64"),
            mimeType: file.mimetype
          }
        };
        const prompt = "Analise esta imagem focando na saúde de um idoso. Forneça uma resposta estritamente em JSON com o formato exato: { \"descricao\": \"descrição do que foi observado\", \"alertas\": [\"alerta 1\"], \"recomendacoes\": [\"recomendacao 1\"] }. A resposta deve estar em português.";
        
        const result = await model.generateContent([prompt, imagePart]);
        const responseText = result.response.text();
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        
        if (jsonMatch) {
          analiseResult = jsonMatch[0];
        } else {
          analiseResult = responseText;
        }
      } catch (error) {
        console.error("Erro na análise da IA Gemini:", error);
      }
    }

    const upload = await prisma.mediaUpload.create({
      data: {
        id_cuidador: cuidadorId,
        nome_original: file.originalname,
        caminho: caminhoRelativo,
        tipo_mime: file.mimetype,
        tamanho_bytes: file.size,
        tipo_midia: tipoMidia,
        analise: analiseResult,
        id_idoso: idosoId ?? null,
      },
      include: {
        cuidador: { select: { id: true, nome: true } },
        idoso: { select: { id: true, nome: true } },
      },
    });

    if (idosoId) {
      await feedService.criarAtividade(idosoId, cuidadorId, 'upload', `Enviou o arquivo ${file.originalname} para o sistema.`);
    }

    return upload;
  }

  async findByCuidador(cuidadorId: number, tipoMidia?: string) {
    return prisma.mediaUpload.findMany({
      where: {
        id_cuidador: cuidadorId,
        ...(tipoMidia && { tipo_midia: tipoMidia as 'video' | 'imagem' | 'documento' }),
      },
      include: {
        idoso: { select: { id: true, nome: true } },
      },
      orderBy: { criado_em: 'desc' },
    });
  }

  async findById(id: number, cuidadorId: number) {
    const upload = await prisma.mediaUpload.findUnique({
      where: { id },
      include: {
        cuidador: { select: { id: true, nome: true } },
        idoso: { select: { id: true, nome: true } },
      },
    });

    if (!upload) throw new Error('UPLOAD_NOT_FOUND');
    if (upload.id_cuidador !== cuidadorId) throw new Error('FORBIDDEN');
    return upload;
  }

  async delete(id: number, cuidadorId: number) {
    const upload = await this.findById(id, cuidadorId);

    const caminhoAbsoluto = path.join(process.cwd(), env.UPLOAD_DIR, upload.caminho);

    await prisma.mediaUpload.delete({ where: { id } });

    if (fs.existsSync(caminhoAbsoluto)) {
      fs.unlinkSync(caminhoAbsoluto);
    }

    return { id, deletado: true, arquivo: upload.nome_original };
  }
}

export const uploadService = new UploadService();
