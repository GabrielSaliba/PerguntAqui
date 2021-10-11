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
  },
  {
    id: "7",
    question: "Quero aprender Pandas",
    author: "Gabriel",
    category: "Python",
    date: "11/10/2021",
  },
  {
    id: "2",
    question: "Como programar em Ruby?",
    author: "Kethellen",
    category: "Ruby",
    date: "05/10/2021"
  },
  {
    id: "3",
    question: "Dicas para iniciantes em React Native...",
    author: "Diego",
    category: "React Native",
    date: "12/09/2021"
  },
  {
    id: "4",
    question: "Como fazer uma boa responsividade para web e mobile?",
    author: "Luís",
    category: "Mobile",
    date: "11/10/2021"
  }
];

onload = () => {
  const categories = document.querySelector("#category-group")
  const telaPerguntas = document.querySelector('#telaPerguntas');
  const telaCategorias = document.querySelector('#telaCategorias');
  const questionsTitle = document.querySelector('#questions-subtitle');
  const questionsBanner = document.querySelector('#banner');
  const questionElement = document.querySelector("#question");
  const questionAuthor = document.querySelector("#questionAuthor");
  const questionDate = document.querySelector("#questionDate");
  // const questionContainer = document.querySelector("#questionContainer")

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
        questionsBanner.src = `./assets/${category.src}`;
        questionsBanner.alt = `${category.title}`;
        questionsTitle.innerHTML = `${category.title}`
      }
    })
  }

  function loadQuestions(category) {
    // let innerHTML = '';
    questionsList.forEach(question => {
      if (question.category === category.title) {
        questionAuthor.innerHTML = question.author
        questionElement.innerHTML = question.question
        questionDate.innerHTML = question.date
        // innerHTML += `<div class="card-header">
        //              <p>${question.question}</p>
        //              <div class="info">
        //              <p class="date">${question.date}</p>
        //              <p>${question.author}</p>
        //              </div>
        //              </div>`;
      }
    })
    // questionContainer.innerHTML = innerHTML;d
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
