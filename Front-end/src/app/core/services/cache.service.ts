import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

interface CacheItem<T> {
  dados: T;
  expiraEm: number;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, CacheItem<any>>();

  obterOuGravar<T>(chave: string, request$: Observable<T>, ttlMinutos = 5): Observable<T> {
    const agora = Date.now();
    const item = this.cache.get(chave);

    if (item && item.expiraEm > agora) {
      return of(item.dados);
    }

    return request$.pipe(
      tap(dados => {
        this.cache.set(chave, {
          dados,
          expiraEm: agora + ttlMinutos * 60 * 1000
        });
      }),
      shareReplay(1)
    );
  }

  invalidar(chave: string): void {
    this.cache.delete(chave);
  }

  limpar(): void {
    this.cache.clear();
  }
}
