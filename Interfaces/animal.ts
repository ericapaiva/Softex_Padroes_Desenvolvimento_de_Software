// Criando uma interface
export interface IAnimal {
  nome: String;
  idade: number;
  tipo: String;
}

export class Arara implements IAnimal {
  public nome: String;
  public idade: number;
  public tipo: String;

  constructor(n: string, i: number, t: string) {
    this.nome = n;
    this.idade = i;
    this.tipo = t;
  }
}

export class Gato implements IAnimal {
  public nome: String;
  public idade: number;
  public tipo: String;

  constructor(n: string, i: number, t: string) {
    this.nome = n;
    this.idade = i;
    this.tipo = t;
  }
}
function main() {
  const arara = new Arara("lulu", 2, "Ave");
  const gato = new Gato("Bixano", 9, "Felino");

  console.log(arara);
  console.log(gato);
}

main();
