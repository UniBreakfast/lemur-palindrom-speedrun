const input = document.querySelector('.input-field');

const button = document.querySelector('.btn');

const output = document.querySelector('.output');


function checkIfIsPalindrome(str) {
  for (let i = 0, j = str.length - 1; i <= j; i += 1, j -= 1) {
    while (str[i] === ' ') {
      i += 1;
    }
    while (str[j] === ' ') {
      j -= 1;
    }
    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }
  }
  return true;
}

function handleText() {
  if (input.value && checkIfIsPalindrome(input.value)) {
    output.innerText = "This IS a palindrome!";
  } else {
    output.innerText = "This is NOT a palindrome!";
  }
}

button.addEventListener('click', handleText);
