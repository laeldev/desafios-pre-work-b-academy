import './style.css'

/* erro: main.js:3 Uncaught TypeError: Cannot set property 'innerHTML' of null

Acrecentato [data-js=app] dentro do querySelector
*/

const app = document.querySelector('[data-js=app]')

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
