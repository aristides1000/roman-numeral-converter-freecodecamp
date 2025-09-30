const number = document.querySelector('#number');
const convertBtn = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

const reset = () => {
  number.value = '';
  output.textContent = '';
  output.classList.remove('hidden');
  output.classList.add('alert');
}

const showResult = (transformedNumber) => {
  output.classList.remove('hidden');
  output.classList.remove('alert');
  output.textContent = transformedNumber;
}

const converterNumber = (placeValue, unit, divisibleFive, divisibleTen) => {
  let romanValue = '';

  switch(placeValue) {
    case 1:
    case 2:
    case 3:
      romanValue += unit.repeat(placeValue);
      break;
    case 4:
      romanValue += unit + divisibleFive;
      break;
    case 5:
      romanValue += divisibleFive;
      break;
    case 6:
    case 7:
    case 8:
      romanValue += divisibleFive + unit.repeat(placeValue - 5);
      break;
    case 9:
      romanValue += unit + divisibleTen;
      break;
  }

  return romanValue;
}

const arabicToRomanNumber = (number) => {
  let romanNumber = '';

  const thousands = Math.trunc(number / 1000);
  const hundreds = Math.trunc(number / 100) - thousands * 10;
  const tens = Math.trunc(number / 10) - thousands * 100 - hundreds * 10;
  const units = number - thousands * 1000 - hundreds * 100 - tens * 10;

  const romanValues = [
    {
      placeValue: hundreds,
      unit: 'C',
      divisibleFive: 'D',
      divisibleTen: 'M'
    },
    {
      placeValue: tens,
      unit: 'X',
      divisibleFive: 'L',
      divisibleTen: 'C'
    },
    {
      placeValue: units,
      unit: 'I',
      divisibleFive: 'V',
      divisibleTen: 'X'
    }
  ];

  romanNumber += 'M'.repeat(thousands);
  romanValues.forEach(({ placeValue, unit, divisibleFive, divisibleTen}) => {
    romanNumber += converterNumber(placeValue, unit, divisibleFive, divisibleTen);
  });

  showResult(romanNumber);
};

const checkNumberInput = () => {
  const converterNumberValue = parseInt(number.value);

  if (!number.value) {
    reset();
    output.textContent = 'Please enter a valid number';
    return;
  }

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
  arabicToRomanNumber(converterNumberValue);
};

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkNumberInput();
    e.preventDefault();
  }
});

convertBtn.addEventListener('click', (e) => {
  checkNumberInput();
  e.preventDefault();
});
