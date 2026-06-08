import { describe, it, expect } from 'vitest';
import { validarForcaSenha } from './validador-senha';

describe('Validador de Senha', () => {
  it('deve rejeitar senha muito curta', () => {
    const resultado = validarForcaSenha('Curta1!');
    expect(resultado.valido).toBe(false);
    expect(resultado.erros).toContain('A senha deve ter pelo menos 8 caracteres.');
  });

  it('deve rejeitar senha sem numero', () => {
    const resultado = validarForcaSenha('SenhaForte!');
    expect(resultado.valido).toBe(false);
    expect(resultado.erros).toContain('A senha deve conter pelo menos um número.');
  });

  it('deve aceitar senha forte', () => {
    const resultado = validarForcaSenha('SenhaForte123!');
    expect(resultado.valido).toBe(true);
    expect(resultado.erros).toHaveLength(0);
  });
});
