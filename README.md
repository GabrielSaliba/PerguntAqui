<h1 align="center">PerguntAqui</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;
</p>
<br><br>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
## 💻 Projeto

O PerguntAqui é uma aplicação web progressiva (PWA) criada para o projeto de  Tópicos Especiais em Sistemas de Informação: Aplicações Híbridas. Sua principal função é permitir o usuário navegar por categorias e registrar perguntas ou respostas sobre as tecnologias de desenvolvimento.

## 🚀 Como executar

<br />Para executar o projeto basta abrir na pasta raiz e executar o arquivo <code>index.html</code>.
<pre>
📂 PerguntAqui
      📃 index.html
</pre>
Também é possível acessar pela web hospedado no Replit clicando no link a seguir [https://perguntaqui.gabrielsaliba.repl.co/](https://perguntaqui.gabrielsaliba.repl.co/)

## Informações Extras
### Telas
- Tela de Login: salva o nome do usuário digitado ao clica no botão para entrar
- Tela de Categorias: exibe todas as categorias para o usuário poder acessar.
- Tela de Perguntas: exibe todas as perguntas referente à categoria selecionada, também é possível criar novas perguntas e digitar respostas.

### Dados
Todas perguntas são salvas em formato de lista no localStorage para que possam ser acessadas offline. 

Exemplo: 
<pre>
[
   {
    id: "3",
    question: "O que é React Native?",
    author: "Diego",
    category: "React Native",
    date: "12/09/2021",
    answers: 
    [
      {
        answer: "React Native é uma biblioteca Javascript criada pelo Facebook",
        author: "Gabriel"
      }
    ]
  },
]
</pre>

### Respostas


A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente?
Resposta: Sim

A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes?
Resposta: Sim

A aplicação armazena e usa de forma relevante dados complexos do usuário?
Resposta: Sim

A aplicação possui um manifesto para instalação no dispositivo do usuário?
Resposta: Sim

A aplicação possui um service worker que permite o funcionamento off-line?
Resposta: Sim

O código da minha aplicação possui comentários explicando cada operação?
Resposta: Sim

A aplicação está funcionando corretamente?
Resposta: Sim

A aplicação está completa?
Resposta: Sim