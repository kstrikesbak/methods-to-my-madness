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

function startsWith(str, substring) {
  for (let i=0; i<substring.length; i++) {
    if(str[i]!==substring[i]) {
      return false
    } 
    } return true
  }



function endsWith(str, substring) {
  for (let i=0; i<str.length; i++) {
    return  str[str.length -1].includes(substring[substring.length-1])
  }
}

function includes(arr, item) {
  for (let i=0;i<arr.length;i++) {
    if (arr[i]===item) {
      return true
    }
  }
  return false 
}

const arr = [3, 6, 9];
includes(arr, 6);

function join(arr, separator = '') {
  let newStr =''
  for(let i=0; i <arr.length; i++){
    if(i=== arr.length-1){
    newStr =newStr + arr[i]}
    else{
    newStr =newStr + arr[i] + separator}
}
return newStr
}


function split(str, separator) {
  let newStr = ''
  let newArr = []
  for(let i=0; i <str.length; i++){
    if(str[i].includes(separator)){ 
      if (true) {
        newArr.push(newStr + str.slice(0,i))
        newArr.push(newStr + str.slice(i+1))}
      
}
  } 
return newArr

}

function trimStart(str) {
  for (let i=0;i<str.length;i++) {

  }
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
