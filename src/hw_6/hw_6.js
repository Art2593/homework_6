function getDiffer(param1, param2) {
  return param1 - param2;
}

function isWord(param) {
  let arr = param.split(" ");
  if (arr.length == 1) {
    return true;
  } else {
    return false;
  }
}

function poww(variable, power) {
  let pow = 1;

  for (let index = 0; index < power; index++) {
    pow = variable * pow;
  }
  return pow;
}

export { getDiffer };
export { isWord };
export { poww };
