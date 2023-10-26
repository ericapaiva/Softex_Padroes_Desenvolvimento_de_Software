//Definindo a interface Funcionarios

export interface Funcionarios {
  CalcularSalario(): number;
  relatorio(): string;
}
// Classe Gerente que implementa a interface Funcionario

class Gerente implements Funcionarios {
  constructor(private nome: string, private salarioBase: number) {}
  CalcularSalario(): number {
    return this.salarioBase * 1.5;
  }
  relatorio(): string {}
}
