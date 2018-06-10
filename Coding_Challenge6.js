/*Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]] */

//Question 1

var numbers = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

// modified from https://blog.omgmog.net/post/javascript-function-to-group-repeated-values-of-an-array-with-totals/

function sortRepeated(){

  let sortNumbers = (a, b) => {return a - b};
  numbers.sort(sortNumbers);

  let count = 1, pos = 0, Array;

  for(i = 0; i < numbers.length; i++){

    count = 1;
    pos = i + 1;

    while(numbers.indexOf(numbers[i], pos) != -1){
      count++;
      numbers.splice(pos, 1);
    }

    Array = [];
    while(count > 0){
      Array.push(numbers[i]);
      count--;
    }
    
    numbers[i] = Array;
  }

  console.log(numbers);
}

//Bonus

var numbers2 = [1, "2", "3", 2, "1", "10", "3", 7, 0, 1, 4] 

function sortNumbersAndStrings(){

  let NumberArray = [];
  let StringArray = [];

  for(i = 0; i < numbers2.length; i++){

    if(typeof numbers2[i] === 'number'){
      NumberArray.push(numbers2[i]);
    } else {
      StringArray.push(numbers2[i])
    }
  }

  let sortNumbers = (a, b) => {return a - b};
  NumberArray.sort(sortNumbers);
  StringArray.sort(sortNumbers);

  numbers2[0] = NumberArray;
  numbers2[1] = StringArray;
  

  console.log(numbers2);
}

/*Question 2: Write a javascript function that takes an array of numbers and a target number.
 The function should find two different numbers in the array that, when added together, give the target number.
 For example: answer([1,2,3], 4) should return [1,3]*/

//Question 2

function findSumTarget(array, target){

  for(i = 0; i < array.length; i++){
    for(j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === target){
        console.log("[" + array[i] + "," + array[j] + "]\n");
      }
    }
  }
}

/*Question 3: Write a function that converts HEX to RGB.
  Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and if you enter
  RGB color format it returns HEX. Bonus: Release this tool as a npm package.*/
  
//Question 3

//input type format

let HEX = "#FFAADD";
let RGB = [255, 170, 221];

function ConvertColor(value){

  //adapted from: http://www.javascripter.net/faq/hextorgb.htm
  
  let R, G, B, Result;

  if(typeof value === 'string'){
    if(value.charAt(0) === "#"){
    value = value.substring(1);
    R = parseInt(value.substring(0, 2), 16)
    G = parseInt(value.substring(2, 4), 16)
    B = parseInt(value.substring(4, 6), 16)
    Result = "rgb(" + R + ", " + G + ", " + B + ")"
    }
  }
 
  //took from the top answer at: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  else{
    Result ="#" + ((1 << 24) + (value[0] << 16) + (value[1] << 8) + value[2]).toString(16).slice(1).toUpperCase();
  }

  console.log(Result)
}
