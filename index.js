//412. Fizz Buzz

let fizzBuzz = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      i.toString();
      result.push(i.toString());
    }
  }
  console.log(result);
  return result;
};
fizzBuzz(4);

// 7. Reverse Integer===================================
let reverseInt = function (x) {
  let reversed = Math.abs(x).toString().split("").reverse().join("");
  console.log(reversed);
  return Math.sign(x) * parseInt(reversed);
};
console.log(reverseInt(-578));

//58. Length of Last Word================================
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
let lengthOfLastWord = function (s) {
  let splitToString = s.trim().split(" ");
  let n = splitToString.length;
  return n > 0 ? splitToString[n - 1].length : 0;
};
lengthOfLastWord("Hello World");
console.log(lengthOfLastWord("Hello World"));

//13. Roman to Integer====================================
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

var romanToInt = function (S) {
  let ans = 0;
  for (let i = S.length - 1; i >= 0; i--) {
    let num = roman[S.charAt(i)];
    if (4 * num < ans) ans -= num;
    else ans += num;
  }
  return ans;
};

// 1185. Day of the Week========================================
let getToday = function (year, month, day) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  getTodayIndex = new Date(year, month - 1, day).getDay();
  return (today = days[getTodayIndex]);
};
console.log(getToday(2021, 8, 21));

//9. Palindrome Number
let isPalindrome = function (x) {
  let x1 = x.toString().split("").reverse().join("");
  return x == x1;
};
console.log(isPalindrome(3232));
