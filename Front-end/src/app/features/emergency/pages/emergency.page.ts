import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { SupportContact } from '../../../core/models';
import { EmergencyService, PatientService } from '../../../core/services';
import { BottomNavigationComponent } from '../../../shared/components';
import { trackById } from '../../../shared/utils';

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [BottomNavigationComponent, CommonModule, RouterLink],
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmergencyPage {
  private readonly patientService = inject(PatientService);
  private readonly emergencyService = inject(EmergencyService);

  readonly patient = this.patientService.getCurrentPatient();
  readonly contacts = this.emergencyService.getSupportContacts();
  readonly trackByContactId = trackById<SupportContact>;
}
