navigator.serviceWorker.register('./app-sw.js');

let categoriesList;
let currentCategory;
let questionsList = [
  {
    id: "1",
    question: "O que é Python?",
    author: "Gabriel",
    category: "Python",
    date: "11/10/2021",
    answers: []
  },
  {
    id: "7",
    question: "Quero aprender Pandas",
    author: "Gabriel",
    category: "Python",
    date: "11/10/2021",
    answers: []
  },
  {
    id: "2",
    question: "Como programar em Ruby?",
    author: "Kethellen",
    category: "Ruby",
    date: "05/10/2021",
    answers: []
  },
  {
    id: "3",
    question: "Dicas para iniciantes em React Native...",
    author: "Diego",
    category: "React Native",
    date: "12/09/2021",
    answers: []
  },
  {
    id: "4",
    question: "Como fazer uma boa responsividade para web e mobile?",
    author: "Luís",
    category: "Mobile",
    date: "11/10/2021",
    answers: []
  }
];

onload = () => {
  const categories = document.querySelector("#category-group")
  const telaPerguntas = document.querySelector('#telaPerguntas');
  const telaCategorias = document.querySelector('#telaCategorias');
  const questionsTitle = document.querySelector('#questions-subtitle');
  const questionsBanner = document.querySelector('#banner');
  const questions = document.querySelector("#questionContainer")

  generateCategories();

  document.querySelector('#cat-back-button').onclick = () => {
    navigateToCategory();
  }

  function navigateToQuestions() {
    window.scrollTo(0, 0);
    telaCategorias.classList.add('hidden');
    telaPerguntas.classList.remove('hidden');
  }

  function navigateToCategory() {
    window.scrollTo(0, 0);
    telaPerguntas.classList.add('hidden');
    telaCategorias.classList.remove('hidden');
  }

  function generateCategories() {
    fillCategoriesList();

    let innerHTML = '';
    categoriesList.forEach(category => {
      innerHTML +=
        `<div id='${category.id}' class='category secondary'>` +
        `<div class='category-image'>` +
        `<img src='./assets/${category.src}' alt='${category.title}' />` +
        `</div>` +
        `<div class='category-text'>${category.title}</div>` +
        `</div>`
    });
    categories.innerHTML = innerHTML;
    categoriesClick();
  }

  function categoriesClick() {
    categoriesList.forEach(category => {
      document.querySelector(`#${category.id}`).onclick = () => {
        navigateToQuestions();
        loadQuestions(category);
        questionsClick(category);
        questionsBanner.src = `./assets/${category.src}`;
        questionsBanner.alt = `${category.title}`;
        questionsTitle.innerHTML = `${category.title}`
      }
    })
  }

  function questionsClick(category) {
    questionsList.forEach(question => {
      if (question.category === category.title) {
        document.querySelector(`#add${question.id}`).onclick = () => {
          let text = document.querySelector(`#text${question.id}`).value;
          let answer = {
            answer: text,
            author: "Gabriel"
          };
          question.answers.push(answer);
          loadQuestions(category);
          questionsClick(category);
        }

      document.querySelector(`#remove${question.id}`).onclick = () => {
          document.querySelector(`#text${question.id}`).value = "";
        }
      }
    })
  }

  function loadQuestions(category) {
    let innerHTML = '';
    questionsList.forEach(question => {
      if (question.category === category.title) {
        innerHTML += `
                      <div  class="card mt3">
                      <div class="card-header">
                      <p>${question.question}</p>
                      <div class="info">
                      <p class="date">${question.date}</p>
                      <p>${question.author}</p>
                      </div>
                      </div>`;
        innerHTML += `<div class="card-content">`
        if (question.answers.length > 0) {
          question.answers.forEach(answer => {
            innerHTML += `       
                        <div class="card-answers">
                        <div>
                        <p>${answer.answer}</p>
                        <div class="info">
                        <p>${answer.author}</p>
                        </div>
                        <div class="divider"></div>
                        </div>
                        </div>`;
          })
        }
        innerHTML += `
                      <div class="card-write-answer">
                      <textarea id="text${question.id}" placeholder="Escreva sua resposta..."></textarea>
                      </div>
                      <div class="card-icons">
                      <img id="add${question.id}" src="./assets/checked.png" alt="Resolvido" />
                      <img id="remove${question.id}" src="./assets/remove.png" alt="Remover" />
                      </div>
                      </div>
                      </div>`;
      }
    })
    questions.innerHTML = innerHTML;
  }

  function fillCategoriesList() {
    categoriesList = [
      {
        id: "back-cat",
        src: "backend.jpg",
        title: "Back-end"
      },
      {
        id: "front-cat",
        src: "front-end.png",
        title: "Front-end"
      },
      {
        id: "mobile-cat",
        src: "mobile.jpg",
        title: "Mobile"
      },
      {
        id: "react-cat",
        src: "React.jpg",
        title: "React"
      },
      {
        id: "native-cat",
        src: "react-native.png",
        title: "React Native"
      },
      {
        id: "node-cat",
        src: "node.jpg",
        title: "Node"
      },
      {
        id: "ruby-cat",
        src: "ruby.jpg",
        title: "Ruby"
      },
      {
        id: "python-cat",
        src: "python.jpg",
        title: "Python"
      }
    ];
  }
}
