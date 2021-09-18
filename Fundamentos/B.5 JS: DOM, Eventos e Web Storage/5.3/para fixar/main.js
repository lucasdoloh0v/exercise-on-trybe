const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const ul = document.querySelector('.container')


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassTech (event) {
  let elementClassTech = document.querySelector('.tech');
  elementClassTech.classList.remove('tech');
  event.target.classList.add('tech');
}
ul.addEventListener('dblclick', addClassTech)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function classTechInnerText () {
  let elementClassTech = document.querySelector('.tech');
  elementClassTech.innerText = 'Esse é o elemento com classe tech'
}
input.addEventListener('input', classTechInnerText)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function redirect () {
  window.location.href = 'https://github.com/lucasdoloh0v/exercise-on-trybe'
}
myWebpage.addEventListener('dblclick', redirect);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeColorMouseOver(event) {
  event.target.style.color = "blue";
}
function changeColorMouseOut(event) {
  event.target.style.color = "white"
}
myWebpage.addEventListener('mouseover', changeColorMouseOver)
myWebpage.addEventListener('mouseout', changeColorMouseOut)


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.