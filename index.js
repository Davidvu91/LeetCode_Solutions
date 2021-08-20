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

// 1. Two Sum =====================================
var twoSum = function (nums, target) {
  let result = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let x = i + 1; x < n; x++) {
      if (nums[i] + nums[x] === target) {
        result.push(i);
        result.push(x);
      }
    }
  }
  console.log(result);
  return result;
};
twoSum([1, 4, 5, 8, 9], 14);

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

//13. Roman to Integer
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

// 1185. Day of the Week
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

//
let isPalindrome = function (x) {
  let x1 = x.toString().split("").reverse().join("");
  return x == x1;
};
console.log(isPalindrome(3232));

// 14. Longest Common Prefix------------------------------
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
var longestCommonPrefix = function (strArray) {
  let preFix = "";
  if (strArray === null || strArray.length === 0) return preFix;
  // loop throw every character of the first String:
  for (let i = 0; i < strArray[0].length; i++) {
    let chars = strArray[0][i];
    console.log(chars);
    for (let x = 1; x < strArray.length; x++) {
      if (strArray[x][i] !== chars) return preFix;
    }
    preFix = preFix + chars;
  }
  return preFix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// 122. Best Time to Buy and Sell Stock II

let bestProfit = function (priceArr) {
  maxProfit = 0;
  let n = priceArr.length;
  for (let i = 1; i < n; i++) {
    if (priceArr[i] - priceArr[i - 1] > 0) {
      maxProfit += priceArr[i] - priceArr[i - 1];
    }
  }
  return maxProfit;
};
console.log(bestProfit([7, 1, 5, 3, 6, 4]));

// 121. Best Time to Buy and Sell Stock

let mProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];
  let n = prices.length;
  for (let i = 1; i < n; i++) {
    buy = Math.min(buy, prices[i - 1]);
    profit = Math.max(prices[i] - buy, profit);
  }
  return profit;
};

console.log(mProfit([7, 6, 4, 3, 4]));
