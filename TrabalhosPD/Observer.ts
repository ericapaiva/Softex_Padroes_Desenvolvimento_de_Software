/* Aplique o padrão de projeto para criar um simples editor de texto. Os requisitos para avaliar o projeto são:

implementar uma subclasse da classe chamada TextEditor;
aplicar o método insertLine, que recebe os parâmetros e text;
inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e 
desloca as linhas posteriores se necessário; instanciar um TextEditor e disparar o evento “open" receber as linhas de texto, 
que serão inseridas no objeto textEditor, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto textEditor
por fim, o textEditor deve disparar o evento “” para que o conteúdo seja salvo no arquivo configurado e 
imprimir todo o conteúdo do arquivo na tela. */

import * as readlineSync from "readline-sync";

class TextEditor {
  private lines: string[] = [];

  insertLine(lineNumber: number, text: string): void {
    this.lines.splice(lineNumber - 1, 0, text);
  }

  removeLine(lineNumber: number): void {
    this.lines.splice(lineNumber - 1, 1);
  }

  open(): void {
    console.log(
      "Editor de Texto Aberto. Insira linhas de texto. Digite 'EOF' para encerrar."
    );

    let input = "";
    while (input.toUpperCase() !== "EOF") {
      input = readlineSync.question(`Linha ${this.lines.length + 1}: `);
      if (input.toUpperCase() !== "EOF") {
        this.insertLine(this.lines.length + 1, input);
      }
    }

    console.log("Conteúdo Salvo:");
    this.lines.forEach((line, index) => {
      console.log(`${index + 1}: ${line}`);
    });
  }
}

// Uso da aplicação
const textEditor = new TextEditor();
textEditor.open();
