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

// 122. Best Time to Buy and Sell Stock II=======================

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

// 121. Best Time to Buy and Sell Stock============================

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

// 1389. Create Target Array in the Given Orders===================
var createTargetArray = function (nums, index) {
  return index.reduce((acc, el, idx) => {
    return [...acc.slice(0, el), nums[idx], ...acc.slice(el)];
  }, []);
};

// 1920. Build Array from Permutation================================
// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

let buildArray = function (perArr) {
  let ansArray = [];
  let n = perArr.length;
  for (let i = 0; i < n; i++) {
    ansArray.push(perArr[perArr[i]]);
  }
  return ansArray;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));

// 1929. Concatenation of Array====================================
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Way #1
let getConcatenation = (nArr) => {
  let CopArr = nArr;
  let nnArr = CopArr.concat(nArr);
  return nnArr;
};
console.log(getConcatenation([1, 3, 2, 1]));

// Way 2:
let getConcatenation2 = (nArr2) => {
  return [...nArr2, ...nArr2];
};
console.log(getConcatenation2([1, 3, 2, 1]));
