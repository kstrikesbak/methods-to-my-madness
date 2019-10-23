function slice(string, start = 0, end = string.length) {
  let newStr = ''
  for (let i=start; i<end; i++) {
    newStr = newStr + string[i]
  }
  return newStr
  }


function repeat(str, repetitions) {
  let newStr = ''
  for (let i=0; i<repetitions; i++) {
    newStr =  newStr + str
  }
  return newStr
}

function startsWith(string, substring) {
}

function endsWith(str, substring) {
}

function includes(arr, item) {
}

function join(arr, separator = '') {
}


function split(str, separator) {
}

function trimStart(str) {
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
