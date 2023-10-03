// Crie uma função chamada saudação que exiba a mesnagem " Olá, mundo!" no console quando for chamda.

function saudacao(): void {
  console.log("Olá, Mundo!");
}
saudacao();

/*Escreva uma função chamada dobro que aceite um parÂmetro num e exiba o dobro desse numero no console.
import input from "readline-sync";

function dobro(num: number): void {
  console.log("o dobro é", num * 2);
}

let valor: number = input.questionFloat(
  "Qual numero você quer o resultado do dobro?"
);

dobro(valor);*/

/*/ Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. Essa função deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive)no console.

import input from "readline-sync";

const inicio: number = input.questionFloat("Digite um numero");
const fim: number = input.questionFloat("Digite um numero");
function mostrarNumeros(inicio: number, fim: number): void {
  while (inicio <= fim) {
    console.log(inicio);
    inicio++;
  }
}
mostrarNumeros(inicio, fim); */

/*/Escreva uma função chamada verificarPar que aceite um número como entrada e exiba no console se o numero é par ou não.

import input from "readline-sync";

const num: number = input.questionInt("Digite um numero");

function verificarPar(num: number): void {
  if (num % 2 == 0) {
    console.log("o numero é par");
  } else {
    console.log("O numero é impar");
  }
}
verificarPar(num); */

// Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento desse array no console.um por um.

import input from "readline-sync";
let lista = ["leite", "morango", "sorvete", "calda"];

function imprimirLista(lista: string[]): void {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
imprimirLista(lista);
