import { describe, expect, it, vi } from 'vitest';
import { ChangeDetectorRef, Injector, runInInjectionContext } from '@angular/core';
import { Router } from '@angular/router';

import { ActivityLogService, EmergencyService, PatientService, TaskService } from '../../../core/services';
import { HomeService } from '../services/home.service';
import { HomePage } from './home.page';

function createPage(): HomePage {
  const injector = Injector.create({
    providers: [
      EmergencyService,
      HomeService,
      PatientService,
      {
        provide: TaskService,
        useValue: {
          getTodayTasks: vi.fn(() => []),
          getTaskTemplates: vi.fn(() => []),
          addTask: vi.fn(),
          toggleTaskStatus: vi.fn(),
          deleteTask: vi.fn()
        }
      },
      {
        provide: ActivityLogService,
        useValue: {
          getRecentLogs: vi.fn(() => []),
          log: vi.fn()
        }
      },
      {
        provide: Router,
        useValue: {
          navigateByUrl: vi.fn()
        }
      },
      {
        provide: ChangeDetectorRef,
        useValue: {
          markForCheck: vi.fn()
        }
      }
    ]
  });

  return runInInjectionContext(injector, () => new HomePage());
}

describe('HomePage', () => {
  it('maps task statuses to user-facing labels', () => {
    const page = createPage();

    expect(page.statusLabel('done')).toBe('Concluida');
    expect(page.statusLabel('next')).toBe('Pendente');
    expect(page.statusLabel('late')).toBe('Atencao');
  });

  it('maps task position to priority tone', () => {
    const page = createPage();

    expect(page.priorityTone(0)).toBe('neutral');
    expect(page.priorityTone(1)).toBe('orange');
    expect(page.priorityTone(2)).toBe('orange');
    expect(page.priorityTone(3)).toBe('green');
  });

  it('maps known task icons and falls back for unknown icons', () => {
    const page = createPage();

    expect(page.taskIconLabel('medical-outline')).toBe('RX');
    expect(page.taskIconLabel('water-outline')).toBe('H2O');
    expect(page.taskIconLabel('missing-icon')).toBe('OK');
  });

  it('opens and closes emergency contacts', () => {
    const page = createPage();

    expect(page.emergencyOpen).toBe(false);

    page.openEmergencyContacts();
    expect(page.emergencyOpen).toBe(true);

    page.closeEmergencyContacts();
    expect(page.emergencyOpen).toBe(false);
  });
});
