const input = document.querySelector('[data-js="nome"]')

const naoMudar = ['da','de','do', 'dos']

input.addEventListener('input', (event) =>{
  const valorNome = event.target.value.split(' ')
  event.target.value = valorNome.map((word)=> {
    return naoMudar.includes(word.toLowerCase())
    ? word.toLowerCase()
    : logicaWord(word)
  }).join(' ')

  console.log('valornome:',valorNome)

})

function logicaWord(word){
  if(word.length === 0){
    return ''
  }

  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}