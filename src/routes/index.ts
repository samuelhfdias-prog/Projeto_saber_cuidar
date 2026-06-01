import { Router } from 'express';
import { authRouter }           from '../modules/auth/auth.routes';
import { idosoRouter }          from '../modules/idoso/idoso.routes';
import { doencaRouter }         from '../modules/doenca/doenca.routes';
import { medicamentoRouter }    from '../modules/medicamento/medicamento.routes';
import { alimentacaoRouter }    from '../modules/alimentacao/alimentacao.routes';
import { acompanhamentoRouter } from '../modules/acompanhamento/acompanhamento.routes';
import { uploadRouter }         from '../modules/upload/upload.routes';

const router = Router();

router.use('/api/auth',             authRouter);
router.use('/api/idosos',           idosoRouter);
router.use('/api/doencas',          doencaRouter);
router.use('/api/medicamentos',     medicamentoRouter);
router.use('/api/alimentacoes',     alimentacaoRouter);
router.use('/api/acompanhamentos',  acompanhamentoRouter);
router.use('/api/uploads',          uploadRouter);

export { router };
