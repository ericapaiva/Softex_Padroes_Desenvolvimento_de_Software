// Exemplo 01: Funções sem parâmetos e sem retorno
function fun01(): void {
  console.log("Minha primeira função typescript");
}
fun01();
// Exemplo 02: Funções com parâmetros e sem retorno
function fun02(nome: string): void {
  console.log("Boa tarde" + nome);
}
fun02("Claudio");

// Exemplo 03: Funções sem parâmetros e com retorno
function fun03(): number | undefined {
  return 10;
}
let valor = fun03();
console.log(valor);

// Exemplo 04: Funções com parâmetros e com retorno
function fun04(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(fun04(1, 5));
