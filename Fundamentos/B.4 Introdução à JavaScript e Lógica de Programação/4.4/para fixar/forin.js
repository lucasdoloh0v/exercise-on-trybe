//1°
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for (let name in names) {
  console.log('Olá, ' + names[name]);
}

//2°
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let info in car) {
  console.log(info + ': ' + car[info]);
}