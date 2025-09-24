const number = document.querySelector('#number');
const convertBtn = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

const reset = () => {
  number.value = '';
  output.textContent = '';
}

const convertRomanNumeral = (numberValue) => {
  console.log(numberValue);
  if (numberValue === '') {
    reset();
    output.textContent = 'Please enter a valid number';
  }

const converterNumberValue = parseInt(numberValue);

  if (converterNumberValue < 1) {
    reset();
    output.textContent = 'Please enter a number greater than or equal to 1';
  }
};

convertBtn.addEventListener('click', (e) => {
  e.preventDefault();
  convertRomanNumeral(number.value);
});
