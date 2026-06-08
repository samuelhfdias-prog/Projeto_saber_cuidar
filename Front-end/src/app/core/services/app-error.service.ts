import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import type { AppErrorMessage, AppErrorStatus } from '../models';

const ERROR_MESSAGES: readonly AppErrorMessage[] = [
  {
    status: 0,
    message: 'Nao foi possivel conectar. Verifique sua internet e tente novamente.'
  },
  {
    status: 400,
    message: 'Nao foi possivel processar a solicitacao.'
  },
  {
    status: 401,
    message: 'Sua sessao precisa ser renovada.'
  },
  {
    status: 403,
    message: 'Voce nao tem permissao para acessar este recurso.'
  },
  {
    status: 404,
    message: 'Nao encontramos o recurso solicitado.'
  },
  {
    status: 408,
    message: 'A conexao demorou demais. Tente novamente.'
  },
  {
    status: 413,
    message: 'O arquivo ou envio esta muito grande.'
  },
  {
    status: 422,
    message: 'Revise os dados preenchidos e tente novamente.'
  },
  {
    status: 429,
    message: 'Muitas tentativas em pouco tempo. Aguarde um instante.'
  },
  {
    status: 500,
    message: 'Ocorreu uma instabilidade. Tente novamente em instantes.'
  }
];

@Injectable({
  providedIn: 'root'
})
export class AppErrorService {
  private lastMessage: string | null = null;

  handle(error: unknown): string {
    const message = this.getUserMessage(error);
    this.lastMessage = message;
    return message;
  }

  getLastMessage(): string | null {
    return this.lastMessage;
  }

  clear(): void {
    this.lastMessage = null;
  }

  getUserMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      return this.getMessageByStatus(this.normalizeStatus(error.status));
    }

    return 'Nao foi possivel concluir a acao. Tente novamente.';
  }

  private getMessageByStatus(status: AppErrorStatus): string {
    return ERROR_MESSAGES.find((errorMessage) => errorMessage.status === status)?.message ?? 'Nao foi possivel concluir a acao. Tente novamente.';
  }

  private normalizeStatus(status: number): AppErrorStatus {
    if (
      status === 0 ||
      status === 400 ||
      status === 401 ||
      status === 403 ||
      status === 404 ||
      status === 408 ||
      status === 413 ||
      status === 422 ||
      status === 429 ||
      status === 500
    ) {
      return status;
    }

    return 500;
  }
}
