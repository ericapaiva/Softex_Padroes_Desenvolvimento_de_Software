/*Utlizando TypeScript aplique o padrão de projeto Strategy para criar uma simples calculadora. Os requisitos para avaliar o projeto são:

implementar uma interface Strategy com o método abstrato execute(). Deve haver três classes concretas que implementam a Strategy 
para realizar as operações de soma, subtração e multiplicação de números inteiros;
o método excute() deve receber dois números inteiros como parâmetros e retonar o resultado também como número inteiro como input do usuário, 
a aplicação deve receber o primeiro valo, depois o segundo, e, por último, a operação matemática que deve realizar no final,
a aplicação deve definir qual Strategy será usada, com base na operação informada, e impirmir o resultado da operação*/

import * as readlineSync from "readline-sync";

// Interface Strategy
interface OperationStrategy {
  execute(num1: number, num2: number): number;
}

// Classes concretas implementando a Strategy
class AdditionStrategy implements OperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 + num2;
  }
}

class SubtractionStrategy implements OperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 - num2;
  }
}

class MultiplicationStrategy implements OperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 * num2;
  }
}

// Contexto que utiliza a Strategy
class Calculator {
  private strategy: OperationStrategy | null = null;

  setStrategy(strategy: OperationStrategy): void {
    this.strategy = strategy;
  }

  calculate(num1: number, num2: number): number {
    if (!this.strategy) {
      throw new Error("A estratégia não foi definida.");
    }
    return this.strategy.execute(num1, num2);
  }
}

// Uso da aplicação
const calculator = new Calculator();

// Solicitar ao usuário os dois números e a operação desejada
const num1 = parseInt(readlineSync.question("Digite o primeiro número: "), 10);
const num2 = parseInt(readlineSync.question("Digite o segundo número: "), 10);
const operation = readlineSync.question("Digite a operação (+, -, *): ");

// Definir a estratégia com base na operação informada
let selectedStrategy: OperationStrategy | null = null;
switch (operation) {
  case "+":
    selectedStrategy = new AdditionStrategy();
    break;
  case "-":
    selectedStrategy = new SubtractionStrategy();
    break;
  case "*":
    selectedStrategy = new MultiplicationStrategy();
    break;
  default:
    console.log("Operação não suportada.");
    selectedStrategy = null;
}

// Calcular e imprimir o resultado se a estratégia foi selecionada
if (selectedStrategy) {
  calculator.setStrategy(selectedStrategy);
  const result = calculator.calculate(num1, num2);
  console.log(`Resultado da operação: ${result}`);
}
