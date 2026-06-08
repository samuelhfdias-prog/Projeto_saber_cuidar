import { Injectable } from '@angular/core';

import { MOCK_ELDER_PROTECTION_GUIDE } from '../data/elder-protection.mock';
import type { ElderProtectionGuide } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ViolenceService {
  getProtectionGuide(): ElderProtectionGuide {
    return MOCK_ELDER_PROTECTION_GUIDE;
  }
}
