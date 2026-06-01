import { Router } from 'express';
import { authenticate } from '../../shared/middlewares/auth.middleware';
import { uploadSingleVideo, uploadSingleImage, uploadMultipleFiles } from '../../config/multer.config';
import {
  uploadVideo, uploadImagem, uploadMultiplos,
  listUploads, getUpload, deleteUpload,
} from './upload.controller';

const uploadRouter = Router();
uploadRouter.use(authenticate); 
uploadRouter.post('/video', uploadSingleVideo, uploadVideo);
uploadRouter.post('/imagem', uploadSingleImage, uploadImagem);
uploadRouter.post('/multiplos', uploadMultipleFiles, uploadMultiplos);
uploadRouter.get('/', listUploads);
uploadRouter.get('/:id', getUpload);
uploadRouter.delete('/:id', deleteUpload);

export { uploadRouter };
