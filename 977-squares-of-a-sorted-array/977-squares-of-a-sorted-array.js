/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let squreNums = [];
    console.log('nums >>>>', nums);
    console.log('nums.lenght >>>', nums.length);
    
    for (let i = 0; i < nums.length; i += 1) {
        squreNums.push(nums[i] * nums[i]);
        console.log('squareNums >>>>', nums[i] * nums[i]);
    }
    squreNums = squreNums.sort(sort2);
    return squreNums;
};
const sort2 = (a, b) => a-b;

/**
* Pseudo
    Step 1. 제곱 처리
    Step 2. Order 처리
*/