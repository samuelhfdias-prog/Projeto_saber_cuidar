import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';
import { env } from './env.config';

const ALLOWED_VIDEO_MIMES = new Set([
  'video/mp4', 'video/avi', 'video/quicktime', 'video/x-msvideo',
  'video/x-matroska', 'video/webm', 'video/mpeg', 'video/3gpp',
]);

const ALLOWED_IMAGE_MIMES = new Set([
  'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/heic', 'image/heif',
]);

const ALLOWED_DOCUMENT_MIMES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const ALL_ALLOWED_MIMES = new Set([
  ...ALLOWED_VIDEO_MIMES, ...ALLOWED_IMAGE_MIMES, ...ALLOWED_DOCUMENT_MIMES,
]);

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function resolveSubDir(mimeType: string): string {
  if (ALLOWED_VIDEO_MIMES.has(mimeType)) return 'videos';
  if (ALLOWED_IMAGE_MIMES.has(mimeType)) return 'imagens';
  if (ALLOWED_DOCUMENT_MIMES.has(mimeType)) return 'documentos';
  return 'outros';
}

const storage = multer.diskStorage({
  destination: (_req: Request, file: Express.Multer.File, cb) => {
    const fullPath = path.join(process.cwd(), env.UPLOAD_DIR, resolveSubDir(file.mimetype));
    ensureDir(fullPath);
    cb(null, fullPath);
  },
  filename: (_req: Request, file: Express.Multer.File, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`);
  },
});

const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
  if (ALL_ALLOWED_MIMES.has(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`Tipo de arquivo não permitido: "${file.mimetype}".`));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: env.MAX_FILE_SIZE_MB * 1024 * 1024, files: 5, fieldNameSize: 100 },
});

export const uploadSingleVideo    = upload.single('video');
export const uploadSingleImage    = upload.single('imagem');
export const uploadMultipleFiles  = upload.array('arquivos', 5);
export { upload };
export const MimeCategories = { ALLOWED_VIDEO_MIMES, ALLOWED_IMAGE_MIMES, ALLOWED_DOCUMENT_MIMES };
