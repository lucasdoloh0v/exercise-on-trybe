const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, crr) =>
  acc + crr.split('').reduce((accumulator, current) => {
    if (current === 'a' || current === 'A') return accumulator + 1;
    return accumulator;
  },0),0)
}

console.log(containsA());