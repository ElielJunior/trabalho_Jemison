🎯 Quiz Interativo
Um quiz dinâmico e estilizado com HTML, CSS e JavaScript. Este projeto apresenta uma série de perguntas com múltiplas alternativas, exibindo a pontuação final ao término. Visual moderno, responsivo e com fundo personalizado.

📋 Descrição
O Quiz Interativo é uma aplicação de perguntas e respostas que testa conhecimentos diversos. Ele apresenta uma interface amigável, com fundo personalizado e estilo responsivo. As perguntas são exibidas uma por uma, com feedback de pontuação ao final.

🧠 Tecnologias Utilizadas
HTML5 – Estrutura semântica da página

CSS3 – Estilização responsiva e visual moderno

JavaScript (Vanilla) – Lógica do quiz

✅ Funcionalidades
Interface responsiva e amigável

Exibição sequencial de perguntas com 4 opções

Cálculo automático da pontuação

Apresentação do resultado final

Design com imagem de fundo e efeitos de hover

🖼️ Visual e Estilo
O style.css define um visual limpo e moderno com os seguintes elementos:

Imagem de fundo personalizada (imagem1.jpg)

Cartões com fundo semi-transparente para maior legibilidade

Botões estilizados com efeito de hover

Tipografia acessível (Arial, sans-serif)

Cores vibrantes para títulos e destaques

💡 Exemplo de customização do botão:
css
Copiar
Editar
button {
  padding: 20px 30px;
  background-color: #000000;
  color: #ffffff;
  font-size: larger;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
🚀 Como Executar
Clone ou baixe este repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/quiz-interativo.git
Certifique-se de que o arquivo de imagem de fundo (imagem1.jpg) esteja na mesma pasta que o style.css.

Abra o arquivo index.html em seu navegador.

📁 Estrutura de Arquivos
bash
Copiar
Editar
quiz-interativo/
├── index.html      # Página principal
├── style.css       # Estilos visuais
├── index.js        # Lógica do quiz
└── imagem1.jpg     # Imagem de fundo (opcional, substituir conforme necessário)
📌 Personalização
Para trocar o tema visual, altere o arquivo style.css.

Para adicionar novas perguntas, edite o array quizData dentro de index.js:

js
Copiar
Editar
{
  question: "Nova pergunta?",
  options: ["A", "B", "C", "D"],
  answer: "A"
}
📄 Licença
Este projeto está licenciado sob a MIT License. Sinta-se à vontade para usá-lo e modificá-lo em projetos pessoais ou educacionais.

