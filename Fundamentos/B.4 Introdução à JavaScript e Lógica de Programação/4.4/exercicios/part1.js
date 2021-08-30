let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//1
console.log('bem vinda, ' + info.personagem);
//2
info['recorrente'] = 'Sim'
console.log(info.recorrente)
//3
for (key in info) {
  console.log(key);
};
//4
for (key in info) {
  console.log(info[key]);
};
//5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (key in info) {
  console.log(info[key] + ' e ' + info2[key]);
}
