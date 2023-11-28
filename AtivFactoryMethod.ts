/*Considere que: 
- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- há dois tipos de computadores: pc e server; - RAM E HD devem estar em GB;
- CPU deve estar em GHz;
- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
- quando o método .toString() for aplicado a im computador, ele deve imprmir seus atributos. */

// Interface comum para os produtos
interface Computer {
  getRAM(): number;
  getHDD(): number;
  getCPU(): number;
  getType(): string;
  toString(): string;
}

// Implementação do computador PC
class PC implements Computer {
  constructor(private ram: number, private hdd: number, private cpu: number) {}

  getRAM(): number {
    return this.ram;
  }

  getHDD(): number {
    return this.hdd;
  }

  getCPU(): number {
    return this.cpu;
  }

  getType(): string {
    return "PC";
  }

  toString(): string {
    return `Tipo: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
  }
}

// Implementação do servidor
class Server implements Computer {
  constructor(private ram: number, private hdd: number, private cpu: number) {}

  getRAM(): number {
    return this.ram;
  }

  getHDD(): number {
    return this.hdd;
  }

  getCPU(): number {
    return this.cpu;
  }

  getType(): string {
    return "Server";
  }

  toString(): string {
    return `Tipo: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
  }
}

// Implementação da fábrica
class ComputerFactory {
  createComputer(
    type: string,
    ram: number,
    hdd: number,
    cpu: number
  ): Computer {
    if (type.toLowerCase() === "pc") {
      return new PC(ram, hdd, cpu);
    } else if (type.toLowerCase() === "server") {
      return new Server(ram, hdd, cpu);
    } else {
      throw new Error("Tipo de computador desconhecido");
    }
  }
}

// Exemplo de uso
const factory = new ComputerFactory();

const pc = factory.createComputer("pc", 8, 256, 3.2);
const server = factory.createComputer("server", 16, 512, 4.0);

console.log(pc.toString());
console.log(server.toString());
