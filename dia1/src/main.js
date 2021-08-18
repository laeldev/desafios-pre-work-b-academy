import './style.css'

/* erro: main.js:3 Uncaught TypeError: Cannot set property 'innerHTML' of null

Acrecentato [data-js=app] dentro do querySelector
*/

const app = document.querySelector('[data-js=app]')
const link = document.querySelector('[data-js=link')

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
/*
  Exercício 04
  Crie um link no HTML (fora da div .app), e adicione à ele um evento de clique. O clique nesse botão deverá alternar a visibilidade do 
  .app: se o .app estiver visível, ele deverá ser escondido. Se estiver escondido, o clique deve exibí-lo.
  https://developer.mozilla.org/pt-BR/docs/Web/CSS/visibility
  Alterando o css 
  nao consegui utiliznado o hidden
  
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
  */

link.addEventListener("click", (event) => {
 const display = app.style.display

 app.style.display = display === 'none' ? 'block' : 'none'
  
 },);