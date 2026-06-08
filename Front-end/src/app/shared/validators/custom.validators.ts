import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validarCpf(controle: AbstractControl): ValidationErrors | null {
  const valor = controle.value;
  if (!valor) return null;
  const cpfLimpo = valor.replace(/\D/g, '');
  if (cpfLimpo.length !== 11) return { cpfInvalido: true };
  return null;
}

export function validarForcaSenha(controle: AbstractControl): ValidationErrors | null {
  const valor = controle.value;
  if (!valor) return null;
  const valido = valor.length >= 8 && /[A-Z]/.test(valor) && /[a-z]/.test(valor) && /\d/.test(valor) && /[!@#$%^&*(),.?":{}|<>]/.test(valor);
  return valido ? null : { senhaFraca: true };
}
