/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 1; j < nums.length; j +=1) {
            if (Number(nums[i]) + Number(nums[j]) === target) {
                if (i !== j) {
                    let arr = [];
                    arr.push(i);
                    arr.push(j);
                    return arr;
                }
            }
        }
    }
};