import { EducationalRepository } from './educational.repository';
import { ViolenceType, EmergencyContact } from './educational.model';


export class EducationalService {
  constructor(private readonly repository: EducationalRepository) {}

  /**
   * Recupera todos os tipos de violência cadastrados.
   * Ordena por severidade: crítica → alta → moderada (mais grave primeiro).
   *
   * @returns Array de ViolenceType ordenado por severidade.
   */
  getAllViolenceTypes(): ViolenceType[] {
    const severityOrder: Record<string, number> = {
      crítica: 0,
      alta: 1,
      moderada: 2,
    };

    return this.repository
      .findAllViolenceTypes()
      .sort((a, b) => (severityOrder[a.severity] ?? 3) - (severityOrder[b.severity] ?? 3));
  }

  /**
   * Recupera todos os canais de proteção e denúncia.
   * Ordenados por prioridade de acionamento (24h e gratuito primeiro).
   *
   * @returns Array de EmergencyContact ordenado por disponibilidade.
   */
  getAllEmergencyContacts(): EmergencyContact[] {
    return this.repository
      .findAllEmergencyContacts()
      .sort((a, b) => {
        const scoreA = (a.available24h ? 2 : 0) + (a.isFree ? 1 : 0);
        const scoreB = (b.available24h ? 2 : 0) + (b.isFree ? 1 : 0);
        return scoreB - scoreA;
      });
  }
}
