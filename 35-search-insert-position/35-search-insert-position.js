/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if (target <= nums[0]) {
        return 0;
    }
    console.log(nums[nums.length-1])
    if (target > nums[nums.length-1]) {
        return nums.length;
    }
    
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i-1] < target && nums[i] >= target) {
            console.log(i);
            return i;
        }
    }
};
/**
* Peeudo
* 1. 0번째 부터 value 비교
  2. target이 [i-1] 크고, [i+1] 보다 작거나 같을 경우 return
*/