const brazilStates = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraiba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

function addState(array) {
  for(let i = 0; i < array.length; i += 1) {
    const option = document.createElement("option");
    const state = array[i];
    option.innerText = state;
    document.querySelector('#state').appendChild(option);
  }
}

function subimitedForm(event) {
  event.preventDefault();
}

addState(brazilStates);
document.querySelector('#submit-form').addEventListener('click', subimitedForm);
