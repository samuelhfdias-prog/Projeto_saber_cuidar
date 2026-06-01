import fs from 'fs';
import path from 'path';
import { prisma } from '../../config/database';
import { env } from '../../config/env.config';
import { MimeCategories } from '../../config/multer.config';

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

    return prisma.mediaUpload.create({
      data: {
        id_cuidador: cuidadorId,
        nome_original: file.originalname,
        caminho: caminhoRelativo,
        tipo_mime: file.mimetype,
        tamanho_bytes: BigInt(file.size),
        tipo_midia: tipoMidia,
        id_idoso: idosoId ?? null,
      },
      include: {
        cuidador: { select: { id: true, nome: true } },
        idoso: { select: { id: true, nome: true } },
      },
    });
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
