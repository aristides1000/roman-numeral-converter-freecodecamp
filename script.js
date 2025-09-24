const number = document.querySelector('#number');
const convertBtn = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

const reset = () => {
  number.value = '';
  output.textContent = '';
}

const convertRomanNumeral = (numberValue) => {
  console.log(numberValue);
  if (!numberValue) {
    reset();
    output.textContent = 'Please enter a valid number';
    return;
  }

const converterNumberValue = parseInt(numberValue);

  if (converterNumberValue <= 0) {
    reset();
    output.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }

  if (converterNumberValue >= 4000) {
    reset();
    output.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }
};

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertRomanNumeral(number.value);
  }
});

/* arreglar esto*/
convertBtn.addEventListener('click', () => {
  convertRomanNumeral(number.value);
});
