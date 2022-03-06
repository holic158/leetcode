/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let sortedNums = nums.sort(compareNumbers);
    
    let left = 0;
    let right = nums.length - 1;
    
    console.log('sortedNums >>>> ', sortedNums);
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        console.log('middle >>>>', middle);
        let potentialMatch = sortedNums[middle];
        console.log('potentialMatch >>>> ', potentialMatch);
        if (potentialMatch === target) {
            return middle;
        } else if (potentialMatch > target) {
            right = middle -1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
    
    
};
/**
* 
*/
const compareNumbers = (a, b) => a-b;

/**
Pseudo Code:
 1. left pointer 생성
 2. right pointer 생성
 3. while loop 으로 left <= right
    3.1 middle pointer 생성 right + lengt /2 하고 버림
    3.2  
 4. return -1
Example
  
  1 2 3 4 5
  
  0 + 5 = 5 /2 버림 ... 2
  
*/