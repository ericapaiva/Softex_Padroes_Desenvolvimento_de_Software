// Interface alvo (Galinha)
interface Galinha {
  cacarejar(): void;
  voar(): void;
}

// Classe concreta (Galinha)
class GalinhaComum implements Galinha {
  cacarejar(): void {
    console.log("Cocoricó!");
  }

  voar(): void {
    console.log("Galinhas não voam muito alto.");
  }
}

// Classe existente (Pato)
class PatoSelvagem {
  grasnar(): void {
    console.log("Quack! Quack!");
  }

  voar(): void {
    console.log("Patos voam alto.");
  }
}

// Adaptador
class AdaptadorPato implements Galinha {
  constructor(private pato: PatoSelvagem) {}

  cacarejar(): void {
    this.pato.grasnar();
  }

  voar(): void {
    this.pato.voar();
  }
}

// Demo
const galinha: Galinha = new GalinhaComum();
console.log("Ações da Galinha Comum:");
galinha.cacarejar();
galinha.voar();

const pato: PatoSelvagem = new PatoSelvagem();
console.log("\nAções do Pato Selvagem:");
pato.grasnar();
pato.voar();

const adaptadorPato: Galinha = new AdaptadorPato(pato);
console.log("\nAções do Pato como se fosse uma Galinha:");
adaptadorPato.cacarejar();
adaptadorPato.voar();
