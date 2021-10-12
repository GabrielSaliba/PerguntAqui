navigator.serviceWorker.register('./app-sw.js');

let categoriesList = [];
let currentCategory = "";
let questionsList = JSON.parse(localStorage.getItem("questionsList"));
let username = "";

onload = () => {
    const categories = document.querySelector("#category-group");
    const telaPerguntas = document.querySelector('#telaPerguntas');
    const telaCategorias = document.querySelector('#telaCategorias');
    const telaLogin = document.querySelector('#telaLogin');
    const questionsTitle = document.querySelector('#questions-subtitle');
    const questionsBanner = document.querySelector('#banner');
    const questions = document.querySelector("#questionContainer");

    doLogin();
    makeQuestion();
    generateCategories();

    document.querySelector('#cat-back-button').onclick = () => {
        navigateToCategory();
    }

    function doLogin() {
        const loginInput = document.querySelector("#loginInput");
        const headerUsername = document.querySelector("#headerUsername");

        document.querySelector("#loginButton").onclick = () => {
            username = loginInput.value
            telaLogin.classList.add("hidden")
            telaCategorias.classList.remove("hidden");
            headerUsername.innerHTML = username;
        }

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

    function makeQuestion() {

        document.querySelector("#addButton").onclick = () => {
            document.querySelector("#addQuestionCard").classList.remove("hidden")
        }

        document.querySelector("#addQuestion").onclick = () => {
            let questionText = document.querySelector("#addQuestionText").value;

            let question = {
                id: new Date().valueOf(),
                question: questionText,
                author: username,
                category: currentCategory,
                date: new Date(Date.now()).toLocaleDateString(),
                answers: []
            }
            questionsList.unshift(question);
            localStorage.setItem("questionsList", JSON.stringify(questionsList));
            document.querySelector("#addQuestionText").value = '';
            let category = categoriesList.find(cat => cat.title === currentCategory);
            loadQuestions(category);
            questionsClick(category);
        }

        document.querySelector("#cancelQuestion").onclick = () => {
            document.querySelector("#addQuestionText").value = '';
            document.querySelector("#addQuestionCard").classList.add("hidden")
        };
    }

    function categoriesClick() {
        categoriesList.forEach(category => {
            document.querySelector(`#${category.id}`).onclick = () => {
                navigateToQuestions();
                loadQuestions(category);
                questionsClick(category);
                currentCategory = category.title;
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
                        author: username
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
                      <img id="add${question.id}" src="./assets/checked.png" alt="Adicionar" />
                      <img id="remove${question.id}" src="./assets/remove.png" alt="Cancelar" />
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
