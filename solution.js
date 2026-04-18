// 1. Reverse a String
// Task: Write a function that takes a string and returns it reversed.

const ReserveString = (string) => {
    const array = string.split("")
    const reverseArray = array.reverse()
    return reverseArray.join("")
}
console.log(ReserveString("Fahim"))


// 2. FizzBuzz
// Task: Print numbers from 1 to n.For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

const FizzBuzz = (n) => {
   for(let i=1;i<=n;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }
     else if (i%3 ===0){
        console.log("fizz")
    }else if(i%5===0){
        console.log("buzz")
    }
   }
}

FizzBuzz(30);


// 3. Find the Largest Number in an Array
// Task: Given an array of integers, return the largest value.


const LargestNumeber=(numbers)=>{
let largeNumber=numbers[0]
for(let number of numbers){
    if(number > largeNumber){
        largeNumber =number
    }
}

console.log(largeNumber)
return largeNumber;
}

LargestNumeber([2,3,52,41,100])

// 4. Check for Palindrome
// Task: Determine if a word reads the same forward and backward.

const isPalindrome = (s) => {
const cleaned=s.toLowerCase();
const reversed=cleaned.split('').reverse().join("")
return cleaned ===reversed
};

console.log(isPalindrome("RaceCarssss")); 

// 5. Sum of Array Elements
// Task: Calculate the total sum of all numbers in an array.

const sumArray = (nums) => {
 let sumResult=0;

 for (let num of nums){
    sumResult+=num
 }
 return sumResult
};

console.log(sumArray([1, 2, 3, 4])); 

// 6. Count Vowels
// Task: Count how many vowels (a, e, i, o, u) are in a given string.

const countVowels=(word)=>{
let count=0;
const vowels="aeiou";
const lowerCaseWord=word.toLowerCase();

for (let char of lowerCaseWord){
   if(vowels.match(char)){
      count++;
   }
}
return count

}

console.log(countVowels("bhaimarkden"))


// 7. Factorial Calculation
// Task: Find the factorial of a non-negative integer n.

const factorialCalculation=(numbers)=>{
   let result=1;

   for(let i =1; i<= numbers;i++){

      result= i * result
   }
return result

}

console.log(factorialCalculation(5))

// 8. Even or Odd List
// Task: Given an array of numbers, return a new array containing only the even numbers.

const evenNumbers=(numbers)=>{
const evenNumbersArray=[];

for(num of numbers){
if(num % 2===0){
   evenNumbersArray.push(num)
}

}
return evenNumbersArray

}

console.log(evenNumbers([23,2,4,1,4,5,24]))


// 10. Find the Minimum in an Array
// Task: Given an array of integers, return the smallest value.

const theMinimum=(numbers)=>{
let i= numbers[0];

for (num of numbers){
   if(num<i)
{
   i=num
}
}
return i
}

console.log((theMinimum([3,32,32,42,13])))

// 14. Convert Celsius to Fahrenheit
// Task: Convert a temperature from Celsius to Fahrenheit.


const theFahrenheit=(celcius)=>{
return (celcius * 9 /5)+32
}
console.log(theFahrenheit(299))



