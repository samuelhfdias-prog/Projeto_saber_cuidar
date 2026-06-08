import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

type ErrorKind = 'not-found' | 'forbidden' | 'internal' | 'connection';

interface ErrorPageContent {
  title: string;
  message: string;
}

const ERROR_PAGE_CONTENT: Record<ErrorKind, ErrorPageContent> = {
  'not-found': {
    title: 'Pagina nao encontrada',
    message: 'Nao conseguimos encontrar esta pagina. Verifique o caminho ou volte para o inicio.'
  },
  forbidden: {
    title: 'Acesso negado',
    message: 'Voce nao tem permissao para acessar esta area.'
  },
  internal: {
    title: 'Nao conseguimos carregar agora',
    message: 'Tente novamente em instantes ou volte para o inicio.'
  },
  connection: {
    title: 'Falha de conexao',
    message: 'Verifique sua internet e tente novamente.'
  }
};

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPage {
  private readonly route = inject(ActivatedRoute);
  readonly kind: ErrorKind = this.resolveKind();
  readonly content = ERROR_PAGE_CONTENT[this.kind];

  retry(): void {
    window.location.reload();
  }

  private resolveKind(): ErrorKind {
    const kind = this.route.snapshot.data['kind'];

    return kind === 'forbidden' || kind === 'internal' || kind === 'connection' ? kind : 'not-found';
  }
}
