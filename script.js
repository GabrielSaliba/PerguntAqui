navigator.serviceWorker.register('./app-sw.js');

let categoriesList;
let currentCategory;

onload = () => {
  const categories = document.querySelector("#category-group")
  const telaPerguntas = document.querySelector('#telaPerguntas');
  const telaCategorias = document.querySelector('#telaCategorias');
  const questionsTitle = document.querySelector('#questions-subtitle');
  const questionsBanner = document.querySelector('#banner');

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
        questionsBanner.src = `./assets/${category.src}`;
        questionsBanner.alt = `${category.title}`;
        questionsTitle.innerHTML = `${category.title}`
      }
    })
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
