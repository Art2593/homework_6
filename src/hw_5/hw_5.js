function sumOfAllElements(array) {
  let summ = 0;
  for (let index = 0; index < array.length; index++) {
    summ = summ + array[index];
  }
  return summ;
}

function multiplyEachElBy_2(array) {
  let arr2 = Object.assign([], array);

  for (let index = 0; index < arr2.length; index++) {
    arr2[index] = arr2[index] * 2;
  }
  return arr2;
}

function getMinValue(array) {
  let minValue = array[0];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < minValue) {
      minValue = array[index];
    }
  }
  return minValue;
}

function getMaxValue(array) {
  let maxValue = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maxValue) {
      maxValue = array[index];
    }
  }
  return maxValue;
}

export { sumOfAllElements };
export { multiplyEachElBy_2 };
export { getMinValue };
export { getMaxValue };
