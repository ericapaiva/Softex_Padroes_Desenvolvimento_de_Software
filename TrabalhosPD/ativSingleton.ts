/*Você é um agente secreto altamente treinado da organização inglesa MI7 e recebeu uma missão critica: proteger a base secreta contra invasões inimigas. O local contém informações vitais para a segurança mundial e só pode ser acessado pou um unico sistema de segurança confiável.
A sua tarefa é implementar um sistema de segurança para a base secreta usando o padrão Singleton em TypeScript. A idéia é que apenas uma instância do sistema de segurança possa ser criada, garantindo que o local esteja bem protegido.

Instruçoes:
1) Crie uma classe chamada SistemaSeguranca. Ela deve implementar o padrão Singleton. Certifique-se de que apenas uma instância de classe possa ser criada.
2) Aclasse SistemaSeguranca deve ter um método chamado acessarBaseSecreta. Ele verifica se a senha inserida pelo agente coincide com a Base secreta. Se estiver correta, o acesso é concedido. Caso contrario, é negado;
3) Crie um programa principal que demonstre o uso do Singleton SistemaSeguranca.No programa, um agente secreto tentará acessar a base secreta inserindo uma senha. SE a senha estiver correta, o acesso será concedido, caso contrario, será negado.
*/
class SistemaSeguranca {
  private static instancia: SistemaSeguranca | null = null;
  private senhaBaseSecreta: string = "Segredo123"; // Senha fictícia para a base secreta

  private constructor() {}

  static obterInstancia(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à base secreta. Bem-vindo, agente!");
    } else {
      console.log("Acesso negado! Senha incorreta. Intruso detectado!");
    }
  }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.obterInstancia();

// Tentativa de acesso à base secreta
sistemaSeguranca.acessarBaseSecreta("Segredo123"); // Acesso concedido
sistemaSeguranca.acessarBaseSecreta("SenhaIncorreta"); // Acesso negado
