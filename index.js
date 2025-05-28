const quizData = [
    {
      question: "Qual a capital da França?",
      options: ["Paris", "Madrid", "Roma", "Berlin"],
      answer: "Paris"
    },
    {
      question: "Qual o maior planeta do sistema solar?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
  {
      question: "qual o nome do flash?",
      options: ["Barry Allen", "Wally West", "Jay Garrick", "Bart Allen"],
      answer: "Barry Allen"
  
    },
    {
      question: "Qual é a capital da Austrália?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra"
    },
    {
      question: "Quem foi o primeiro presidente do Brasil?",
      options: ["Getúlio Vargas", "Dom Pedro II", "Deodoro da Fonseca", "Juscelino Kubitschek"],
      answer: "Deodoro da Fonseca"
    },
    {
      question: "Qual é o planeta mais próximo do Sol?",
      options: ["Terra", "Vênus", "Marte", "Mercúrio"],
      answer: "Mercúrio"
    },
    {
      question: "Quantos jogadores um time de futebol tem em campo?",
      options: ["9", "10", "11", "12"],
      answer: "11"
    },
    {
      question: "Qual filme ganhou o Oscar de Melhor Filme em 1994?",
      options: ["Forrest Gump", "Pulp Fiction", "O Rei Leão", "Um Sonho de Liberdade"],
      answer: "Forrest Gump"
    },
    {
      question: "Quem escreveu 'Dom Quixote'?",
      options: ["William Shakespeare", "Machado de Assis", "Miguel de Cervantes", "José Saramago"],
      answer: "Miguel de Cervantes"
    },
    {
      question: "Qual é o elemento químico representado pelo símbolo 'O'?",
      options: ["Ouro", "Oxigênio", "Osmium", "Óxido"],
      answer: "Oxigênio"
    }
    
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();