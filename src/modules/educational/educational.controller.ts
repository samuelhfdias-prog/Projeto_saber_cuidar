import { Request, Response } from 'express';
import { EducationalService } from './educational.service';
import { educationalRepository } from './educational.repository';
import { sendSuccess } from '../../shared/utils/response.helper';
import { ViolenceType, EmergencyContact } from './educational.model';

/** Instância do serviço. */
const educationalService = new EducationalService(educationalRepository);

/**
 * GET /api/educational/violence-types
 *
 * Retorna a lista completa de tipos de violência contra o idoso
 * para alimentar a ViolenceScreen do front-end Angular.
 * Ordenados por severidade (crítica → alta → moderada).
 */
export function getAllViolenceTypes(_req: Request, res: Response): void {
  const violenceTypes = educationalService.getAllViolenceTypes();

  sendSuccess<ViolenceType[]>(
    res,
    violenceTypes,
    `${violenceTypes.length} tipos de violência carregados com sucesso.`
  );
}

/**
 * GET /api/educational/emergency-contacts
 *
 * Retorna os canais de proteção, denúncia e suporte ao idoso.
 * Ordenados por prioridade de acionamento.
 */
export function getAllEmergencyContacts(_req: Request, res: Response): void {
  const contacts = educationalService.getAllEmergencyContacts();

  sendSuccess<EmergencyContact[]>(
    res,
    contacts,
    `${contacts.length} canais de proteção carregados com sucesso.`
  );
}
