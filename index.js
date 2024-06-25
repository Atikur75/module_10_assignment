// Problem 1 : Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(num1, num2){
    return num1 + num2;
}

let result = calculateSum(5, 10);
console.log(result);


// Problem 2 : Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(num){
    if(num % 2 === 0){
        return true
    }else{
        return false;
    }
}

let result = isEven(90);
console.log(result);


// Problem 3 : Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(array){
    if(array.length === 0){
        return undefined;
    }
    return Math.max(...array);
}

let result = findMax([10,5,3]);
console.log(result);


// Problem 4 : Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(string){
    let reverseString = string.split("").reverse().join("");
    return reverseString;
}

let result = reverseString("hello");
console.log(result);


// Problem 5 : Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(arr){
    if(arr.length === 0){
        return undefined;
    }else{
        const filterNumbers = arr.filter(function(number){
            if(number % 2 !== 0){
                return number;
            }
        })
        if(filterNumbers.length === 0){
            return 'No odd number is found in this array!';
        }
        return filterNumbers;
    }
}

let result = filterOddNumbers([2,4,6]);
console.log(result);


// Problem 6 : Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(arr){
    let sum = 0;
    arr.forEach(number => {
        sum = sum + number;
    });
    return sum;
}

let result  = sumArray([2,4,6,5]);
console.log(result);

// Other way....

function sumArray(arr){
    return arr.reduce((sum, current) => sum + current, 0);
}

let result  = sumArray([2,4,6,5]);
console.log(result);


// Problem 7 : Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(arr){
    let newArray = Array.from(arr);
    return newArray.sort((a,b) => a -b );
}

let result = sortArray([5,3,2,7,1,10,8,9]);
console.log(result);


// Problem 8 : Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(str){
    let capitalLetter = str[0].toUpperCase();
    let capitalizeFirstLetterStr = capitalLetter.concat(str.slice(1));
    return capitalizeFirstLetterStr;
}

let result = capitalizeFirstLetter('hello');
console.log(result);