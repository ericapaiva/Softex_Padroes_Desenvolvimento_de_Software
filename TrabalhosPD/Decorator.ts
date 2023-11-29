/* Aplique o padrão de projeto decorator em typescript para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto deve ser os seguintes critérios:

deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49
o sanduíche de frango assado custa $4,50.
o ingrediemte adicional pepperoni custa $0,99
o ingrediente adicional mussarela ralado custa $2,00
crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado */

// Interface
interface Sanduiche {
  getDescricao(): string;
  getCusto(): number;
}

// Componente concreto
class FrangoAssado implements Sanduiche {
  getDescricao(): string {
    return "Sanduíche de Frango Assado";
  }

  getCusto(): number {
    return 4.5;
  }
}

// Decorador concreto: Pepperoni
class Pepperoni implements Sanduiche {
  constructor(private sanduiche: Sanduiche) {}

  getDescricao(): string {
    return this.sanduiche.getDescricao() + ", Pepperoni";
  }

  getCusto(): number {
    return this.sanduiche.getCusto() + 0.99;
  }
}

// Decorador concreto: QueijoMussarelaRalado
class QueijoMussarelaRalado implements Sanduiche {
  constructor(private sanduiche: Sanduiche) {}

  getDescricao(): string {
    return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
  }

  getCusto(): number {
    return this.sanduiche.getCusto() + 2.0;
  }
}

// Cliente
const sanduiche = new QueijoMussarelaRalado(new Pepperoni(new FrangoAssado()));

// Imprimindo no console
console.log(
  sanduiche.getDescricao() + " custa $" + sanduiche.getCusto().toFixed(2)
);
