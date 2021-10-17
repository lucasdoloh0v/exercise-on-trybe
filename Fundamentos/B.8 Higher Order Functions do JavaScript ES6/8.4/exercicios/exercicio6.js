const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const averages = grades
  .map((grade) => grade.reduce((acc, curr, i, arr) => {
    if (i === arr.length - 1) return (acc + curr) / arr.length;
    acc = acc + curr;
    return acc;
  }));
  return students.map((student, i) => (
    {
      name: student, average: averages[i]
    }
  ))
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
