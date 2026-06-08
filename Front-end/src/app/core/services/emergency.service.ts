import { Injectable } from '@angular/core';

import { MOCK_EMERGENCY_CONTACTS, MOCK_SUPPORT_CONTACTS } from '../data/care.mock';
import type { EmergencyContact, SupportContact } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {
  getEmergencyContacts(): readonly EmergencyContact[] {
    return MOCK_EMERGENCY_CONTACTS;
  }

  getSupportContacts(): readonly SupportContact[] {
    return MOCK_SUPPORT_CONTACTS;
  }
}
