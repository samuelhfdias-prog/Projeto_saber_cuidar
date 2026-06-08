import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private filaDeEspera: any[] = [];

  constructor() {
    this.escutarEventosDeRede();
  }

  private escutarEventosDeRede() {
    window.addEventListener('online', () => this.sincronizarDadosPendentes());
    window.addEventListener('offline', () => this.notificarOffline());
  }

  private sincronizarDadosPendentes() {
    console.log('Conexão restabelecida. Sincronizando dados pendentes...', this.filaDeEspera);

    this.filaDeEspera = [];
  }

  private notificarOffline() {
    console.log('Você está offline. As alterações serão salvas localmente.');
  }

  public enfileirarParaSincronizacao(dado: any) {
    if (!navigator.onLine) {
      this.filaDeEspera.push(dado);
      console.log('Dado salvo localmente para sincronização futura.');
    } else {

    }
  }
}
