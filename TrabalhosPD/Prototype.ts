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
