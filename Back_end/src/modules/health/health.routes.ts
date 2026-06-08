import { Router, Request, Response } from 'express';
import { analyzeObservation, saveObservation } from './health.controller';
import { HealthService } from './health.service';
import { healthRepository } from './health.repository';

const healthRouter = Router();
const healthService = new HealthService(healthRepository);

healthRouter.post('/observations/analyze', analyzeObservation);
healthRouter.post('/observations', saveObservation);

healthRouter.post('/observations/analyze-image', async (req: Request, res: Response) => {
  try {
    const { imageUrl, category, notes } = req.body;

    if (!imageUrl || !category) {
      return res.status(400).json({
        success: false,
        message: 'imageUrl e category são obrigatórios'
      });
    }

    const result = await healthService.analyzeImageObservation(imageUrl, category, notes || '');

    return res.json({
      success: true,
      diagnosis: {
        riskLevel: result.detectedRisk,
        findings: result.diagnosticFindings,
        recommendations: result.clinicalRecommendations,
        confidence: 75,
        requiresImmediateAttention: result.requiresImmediateAttention
      },
      metadata: {
        processedAt: new Date().toISOString(),
        processingTimeMs: Date.now(),
        aiModel: 'external-vision-api'
      }
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Erro ao analisar imagem'
    });
  }
});

export { healthRouter };
