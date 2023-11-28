/*Crie uma fábrica de veículos utilizando o padrão Prototype. Os requisitos devem ser:

implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;
o construtor da classe Veículo deve receber o modelo, marca, cor e numeroRodas como parâmetros;
crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas
desenovlva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;
na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos
no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos*/

// Classe abstrata Veículo
abstract class Veiculo {
  constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numeroRodas: number
  ) {}

  abstract clone(): Veiculo;

  represent(): string {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
  }
}

// Subclasse Carro que estende Veículo
class Carro extends Veiculo {
  constructor(
    modelo: string,
    marca: string,
    cor: string,
    numeroRodas: number,
    public numeroPortas: number
  ) {
    super(modelo, marca, cor, numeroRodas);
  }

  clone(): Carro {
    return new Carro(
      this.modelo,
      this.marca,
      this.cor,
      this.numeroRodas,
      this.numeroPortas
    );
  }
}

// Subclasse Moto que estende Veículo
class Moto extends Veiculo {
  constructor(
    modelo: string,
    marca: string,
    cor: string,
    numeroRodas: number,
    public partidaEletrica: boolean
  ) {
    super(modelo, marca, cor, numeroRodas);
  }

  clone(): Moto {
    return new Moto(
      this.modelo,
      this.marca,
      this.cor,
      this.numeroRodas,
      this.partidaEletrica
    );
  }
}

// Função auxiliar para criar clones de veículos
function clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
  return veiculos.map((veiculo) => veiculo.clone());
}

// Exemplo de uso
const car1 = new Carro("Civic", "Honda", "Preto", 4, 4);
const moto1 = new Moto("CBR", "Honda", "Vermelho", 2, true);

const veiculosOriginais: Veiculo[] = [car1, moto1];
const veiculosClonados: Veiculo[] = clonarVeiculos(veiculosOriginais);

// Imprimir representações
veiculosClonados.forEach((veiculo) => console.log(veiculo.represent()));
