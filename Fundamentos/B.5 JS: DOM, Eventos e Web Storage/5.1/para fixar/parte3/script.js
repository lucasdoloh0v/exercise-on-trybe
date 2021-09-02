document.getElementsByTagName("header")[0].style.backgroundColor = "green";

let leftSide = document.querySelectorAll('.emergency-tasks');
for (let i = 0; i < leftSide.length; i += 1) {
  leftSide[i].style.backgroundColor = "pink"
}

let leftSideH3 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < leftSideH3.length; i += 1) {
  leftSideH3[i].style.backgroundColor = "purple"
}

let rightSide = document.querySelectorAll('.no-emergency-tasks');
for (let i = 0; i < rightSide.length; i += 1) {
  rightSide[i].style.backgroundColor = "yellow"
}

let rightSideH3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < rightSideH3.length; i += 1) {
  rightSideH3[i].style.backgroundColor = "gray"
}

document.getElementsByTagName('footer')[0].style.backgroundColor = "green"