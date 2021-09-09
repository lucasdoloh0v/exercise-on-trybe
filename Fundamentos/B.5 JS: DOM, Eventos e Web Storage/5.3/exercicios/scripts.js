function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerText = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1
function addDays () {
  let daysList = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerText = day;
    dayListItem.classList.add('day');
    if (day === 24 || day === 25 || day === 31) {
      dayListItem.classList.add('holiday');
      daysList.appendChild(dayListItem);
    };
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayListItem.classList.add('friday');
    }

    daysList.appendChild(dayListItem)
  };
};

addDays();

//2
function addButton (string) {
  const buttonsContainer = document.querySelector('.buttons-container');

  const button = document.createElement('button');
  buttonsContainer.appendChild(button);
  addIdBtn (button, 'btn-holiday');
  addTextBtn (button, string);
};

addButton("Feriados");

//3
function clickHolidayBtn () {
  let holidays = document.getElementsByClassName('holiday');
  let currentColor = verifyColor(holidays);
  if (currentColor === 'green') {
    for (let i = 0; i < holidays.length; i += 1) {
      let holiday = holidays[i];
      holiday.style.backgroundColor = '#eee';
    };
  } else {
    for (let i = 0; i < holidays.length; i += 1) {
      let holiday = holidays[i];
      holiday.style.backgroundColor = 'green';
    };
  };  
};

function verifyColor (elements) {
  return elements[0].style.backgroundColor;
};

let holidayButton = document.getElementById("btn-holiday");
holidayButton.addEventListener('click', clickHolidayBtn);

//4
function addIdBtn (element, nameId) {
  element.setAttribute('id', nameId);
};
function addTextBtn (element, text) {
  element.innerText = text;
}

function addButtonFriday (string) {
  const buttonsContainer = document.querySelector('.buttons-container');

  const button = document.createElement('button');
  buttonsContainer.appendChild(button);
  addIdBtn (button, 'btn-friday');
  addTextBtn (button, string);
};

addButtonFriday ('Sexta-Feira');

//5
function clickFridayBtn () {
  let fridays = document.querySelectorAll('.friday');
  let fridayDays = [4, 11, 18, 25];
  for (let i = 0; i < fridays.length; i += 1) {
    if (fridays[i].innerText === '4' || fridays[i].innerText === '11' || fridays[i].innerText === '18' || fridays[i].innerText === '25') {
      fridays[i].innerText = 'mufasa';
    } else {
      fridays[i].innerText = fridayDays[i];
    };
  };  
};
let fridayButton = document.getElementById("btn-friday");
fridayButton.addEventListener('click', clickFridayBtn);

//6