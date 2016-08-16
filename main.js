console.log('test');

console.log('Problem One:');
var numArra = [8, 9, 10, 11];

function greaterThan10 (num) {
    return num > 10;
}

function any(array, numValue) {
  for(var i= 0; i < numArra.length; i++){
    if(numValue(array[i])) {
      return true;
    }
  }
}
console.log(any(numArra, greaterThan10));


//PROBLEM ONE USING MAP-- NOT THE DIRECTIONS BUT PRACTICING....
//MAP WILL RETURN AN ARRAY FOR EVERY DATA SET AS TRUE/FALSE

var aListOfNumbers = [8, 9, 10, 11];

function greaterTen (num) {
  return num > 10;
}

function listOfBigNums(arrayOfNum, funcCheckSize) {
  return arrayOfNum.map(funcCheckSize);
}
console.log(listOfBigNums(aListOfNumbers, greaterTen));


//PROBLEM ONE USING REDUCE-- NOT THE DIRECTIONS BUT PRACTICING....
//REDUCE WILL RETURN AN ARRAY FOR EVERY DATA SET WITH THE VALUES THAT YOU //FILTERED.  I WAS LOOKING FOR NUMBERS GREATER THAN TEN
var listOfNumbers = [8, 9, 10, 11];

function greaterTenCheck (numb) {
  return numb > 10;
}
function listOfBigNums(arrayOfNumber, functCheckSize) {
  return arrayOfNumber.filter(functCheckSize);
}
console.log(listOfBigNums(listOfNumbers, greaterTenCheck));

console.log('Problem Two:');
var string1 = 'Surprise';
function surprise(word) {
  word;
  return function (edit) {
    return word + edit;
  }
}
console.log(surprise('Surprise')('!'));
//
console.log('Problem Three:');


var numbersArray = [1, 2, 3, 4, 5];

function onlyOdd (num) {
  return num % 2 !== 0;
}

function filter (array, checkOdd) {
  var oddArray = [];

  for(var j = 0; j < array.length; j++) {
    if(checkOdd(array[j]) === true){
      oddArray.push(array[j]);
      //console.log(oddArray);
    }
  }
  return oddArray;
}

console.log(filter(numbersArray, onlyOdd));

//refactor this problem using filter.
console.log('Problem Two:');
var string1 = 'Surprise';
function surprise(word) {
  word;
  return function (edit) {
    return word + edit;
  }
}
console.log(surprise('Surprise')('!'));

console.log('Problem Four:');

function sumTwoNumbers(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
console.log(sumTwoNumbers(3)(9));


//PRACTICE USING THE REDUCE FUNCTION:
var numList = [3, 9, 3, 9];

var totals = numList.reduce(function(a, b){
  return a+b;
});
console.log('method #1: ', totals);

//PRACTICE USING REDUCE WRITTEN WITH AN ARROW FUNCTION:
var total = numList.reduce((a,b) => a + b);
console.log('last problem');
console.log('method #2: ', total);
