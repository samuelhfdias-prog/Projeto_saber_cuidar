import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  getItem(key: string): string | null {
    if (!this.canUseStorage()) {
      return null;
    }

    return localStorage.getItem(key);
  }

  setItem(key: string, value: string, options: { sensitive?: boolean } = {}): void {
    if (!this.canUseStorage() || options.sensitive) {
      return;
    }

    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    if (!this.canUseStorage()) {
      return;
    }

    localStorage.removeItem(key);
  }

  private canUseStorage(): boolean {
    return typeof localStorage !== 'undefined';
  }
}
