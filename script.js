navigator.serviceWorker.register('./app-sw.js');

onload = () => {
  const telaPerguntas = document.querySelector('#telaPerguntas');
  const telaCategorias = document.querySelector('#telaCategorias');
  const questionsSubtitle = document.querySelector('#questions-subtitle');
  const banner = document.querySelector('#banner');

  document.querySelector('#cat-back-button').onclick = () => {
    navigateToCategory();
  }

  document.querySelector('#back-cat').onclick = () => {
    navigateToQuestions();
    banner.src = "./assets/backend.jpg";
    banner.alt = "Backend";
    questionsSubtitle.innerHTML = 'Back-end'
  }

  document.querySelector('#mobile-cat').onclick = () => {
    navigateToQuestions();
    banner.src = "./assets/mobile.jpg";
    banner.alt = "Mobile";
    questionsSubtitle.innerHTML = 'Mobile'
  }

  document.querySelector('#react-cat').onclick = () => {
    navigateToQuestions();
    banner.src = "./assets/React.jpg";
    banner.alt = "React";
    questionsSubtitle.innerHTML = 'React'
  }

  document.querySelector('#native-cat').onclick = () => {
    navigateToQuestions();
    banner.src = "./assets/react-native.png";
    banner.alt = "React Native";
    questionsSubtitle.innerHTML = 'React Native'
  }

  document.querySelector('#node-cat').onclick = () => {
    navigateToQuestions();
    banner.src = "./assets/node.jpg";
    banner.alt = "Node";
    questionsSubtitle.innerHTML = 'Node'
  }

  document.querySelector('#ruby-cat').onclick = () => {
    navigateToQuestions();
    banner.src = "./assets/ruby.jpg";
    banner.alt = "Ruby";
    questionsSubtitle.innerHTML = 'Ruby'
  }

  document.querySelector('#front-cat').onclick = () => {
    navigateToQuestions();
    banner.src = "./assets/front-end.png";
    banner.alt = "Frontend";
    questionsSubtitle.innerHTML = 'Front-end'
  }

  document.querySelector('#python-cat').onclick = () => {
    navigateToQuestions();
    banner.src = "./assets/python.jpg";
    banner.alt = "Python";
    questionsSubtitle.innerHTML = 'Python'
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
}
