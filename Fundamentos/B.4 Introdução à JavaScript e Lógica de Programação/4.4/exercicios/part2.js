function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
let verificaPalindrome = isPalindrome('ganhar')
console.log(verificaPalindrome)