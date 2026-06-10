export function validarForcaSenha(senha: string, email?: string, cpf?: string): { valido: boolean; erros: string[] } {
  const erros: string[] = [];

  if (senha.length < 8) erros.push('A senha deve ter no mínimo 8 caracteres.');
  if (!/[A-Z]/.test(senha)) erros.push('A senha deve conter pelo menos uma letra maiúscula.');
  if (!/[a-z]/.test(senha)) erros.push('A senha deve conter pelo menos uma letra minúscula.');
  if (!/\d/.test(senha)) erros.push('A senha deve conter pelo menos um número.');
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) erros.push('A senha deve conter pelo menos um símbolo.');
  
  if (email && senha.toLowerCase() === email.toLowerCase()) {
    erros.push('A senha não pode ser igual ao email.');
  }
  
  if (cpf && senha === cpf) {
    erros.push('A senha não pode ser igual ao CPF.');
  }

  return {
    valido: erros.length === 0,
    erros
  };
}
