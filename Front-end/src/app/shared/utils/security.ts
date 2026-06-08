import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function sanitizeText(value: string, maxLength: number): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, maxLength);
}

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '');

    if (value.length === 0) {
      return null;
    }

    const strongEnough =
      value.length >= 10 &&
      /[a-z]/.test(value) &&
      /[A-Z]/.test(value) &&
      /\d/.test(value) &&
      /[^A-Za-z0-9]/.test(value);

    return strongEnough ? null : { strongPassword: true };
  };
}

export function httpsUrlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '').trim();

    if (value.length === 0) {
      return null;
    }

    try {
      const url = new URL(value);
      return url.protocol === 'https:' ? null : { httpsUrl: true };
    } catch {
      return { httpsUrl: true };
    }
  };
}
