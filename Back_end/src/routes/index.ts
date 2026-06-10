import { Router, Request, Response } from 'express';
import { authRouter }           from '../modules/auth/auth.routes';
import { idosoRouter }          from '../modules/idoso/idoso.routes';
import { doencaRouter }         from '../modules/doenca/doenca.routes';
import { medicamentoRouter }    from '../modules/medicamento/medicamento.routes';
import { alimentacaoRouter }    from '../modules/alimentacao/alimentacao.routes';
import { acompanhamentoRouter } from '../modules/acompanhamento/acompanhamento.routes';
import { uploadRouter }         from '../modules/upload/upload.routes';
import { healthRouter }         from '../modules/health/health.routes';
import { feedRouter }           from '../modules/feed/feed.routes';
import { cuidadorIdosoRouter }  from '../modules/cuidador-idoso/cuidador-idoso.routes';
import { relatorioRouter }      from '../modules/relatorio/relatorio.routes';
import { prontuarioRouter }     from '../modules/prontuario/prontuario.routes';

const router = Router();

router.use('/api/auth',             authRouter);
router.use('/api/idosos',           idosoRouter);
router.use('/api/doencas',          doencaRouter);
router.use('/api/medicamentos',     medicamentoRouter);
router.use('/api/alimentacao',      alimentacaoRouter);
router.use('/api/acompanhamento',   acompanhamentoRouter);
router.use('/api/upload',           uploadRouter);
router.use('/api/health',           healthRouter);

import { feedService } from '../modules/feed/feed.service';

import {
  MOCK_EXERCISES,
  MOCK_WELLNESS_QUESTIONS,
  MOCK_CARE_GUIDES,
  MOCK_GUIDE_FEATURE,
  MOCK_GUIDE_GROUPS,
  MOCK_GUIDE_ITEMS,
  MOCK_GUIDE_TUTORIALS,
  MOCK_HEALTH_TYPES
} from '../modules/health/educational.data';

const educationalRouter = Router();

educationalRouter.get('/featured-guide', (_req: Request, res: Response) => {
  res.json({ dados: MOCK_GUIDE_FEATURE });
});

educationalRouter.get('/guide-groups', (_req: Request, res: Response) => {
  res.json({ dados: MOCK_GUIDE_GROUPS.map((group: any) => ({
    id: group.id,
    title: group.title,
    items: group.guides
      .map((guide: any) => MOCK_GUIDE_ITEMS.find((item: any) => item.id === guide.id))
      .filter((item: any) => item !== undefined)
  })) });
});

educationalRouter.get('/guide-items', (_req: Request, res: Response) => {
  res.json({ dados: MOCK_GUIDE_ITEMS });
});

educationalRouter.get('/tutorials', (_req: Request, res: Response) => {
  res.json({ dados: MOCK_GUIDE_TUTORIALS });
});

educationalRouter.get('/videos/:id', (req: Request, res: Response) => {
  const videoId = req.params.id;
  const video = MOCK_CARE_GUIDES.flatMap((guide: any) => guide.videos ?? []).find((v: any) => v.id === videoId);
  res.json({ dados: video || null });
});

educationalRouter.get('/videos/youtube/:id', (req: Request, res: Response) => {
  const youtubeId = req.params.id;
  const video = MOCK_CARE_GUIDES.flatMap((guide: any) => guide.videos ?? []).find((v: any) => v.youtubeId === youtubeId);
  res.json({ dados: video || null });
});

educationalRouter.get('/exercises', (_req: Request, res: Response) => {
  res.json({ dados: MOCK_EXERCISES });
});

educationalRouter.post('/exercises/complete', async (req: Request, res: Response) => {
  try {
    const { idosoId, title } = req.body;
    const cuidadorId = (req as any).cuidador?.sub || 1;

    await feedService.criarAtividade(
      idosoId,
      cuidadorId,
      'exercicio',
      `O exercício '${title}' foi concluído.`
    );
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

educationalRouter.get('/wellness-questions', (_req: Request, res: Response) => {
  res.json({ dados: MOCK_WELLNESS_QUESTIONS });
});

educationalRouter.post('/wellness-questions/answer', async (req: Request, res: Response) => {
  try {
    const { idosoId, answers } = req.body;
    const cuidadorId = (req as any).cuidador?.sub || 1;

    let summary = 'Check-in Diário:\n';
    if (answers) {
      for (const [key, val] of Object.entries(answers)) {
        summary += `- Q${key}: ${val}\n`;
      }
    }

    await feedService.criarAtividade(
      idosoId,
      cuidadorId,
      'prontuario',
      summary
    );
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

educationalRouter.get('/guides', (_req: Request, res: Response) => {
  res.json({ dados: MOCK_CARE_GUIDES });
});

educationalRouter.get('/guides/slug/:slug', (req: Request, res: Response) => {
  const guide = MOCK_CARE_GUIDES.find((g: any) => g.slug === req.params.slug);
  res.json({ dados: guide || null });
});

educationalRouter.get('/guides/:id', (req: Request, res: Response) => {
  const guide = MOCK_GUIDE_ITEMS.find((g: any) => g.id === req.params.id);
  res.json({ dados: guide || null });
});

educationalRouter.get('/movies', (_req: Request, res: Response) => {
  res.json({
    dados: [
      { id: '1', category: 'Clássicos', thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300&q=80' },
      { id: '2', category: 'Comédias', thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80' },
      { id: '3', category: 'Documentários', thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=300&q=80' }
    ]
  });
});

router.use('/api/educational', educationalRouter);

healthRouter.get('/types', (_req: Request, res: Response) => {
  res.json({ dados: MOCK_HEALTH_TYPES });
});

router.use('/api/idosos/:idosoId/feed', feedRouter);
router.use('/api/idosos/:idosoId/cuidadores', cuidadorIdosoRouter);
router.use('/api/idosos/:idosoId/relatorios', relatorioRouter);
router.use('/api/idosos/:idosoId/prontuarios', prontuarioRouter);

export { router };
