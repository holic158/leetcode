/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumber = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    
    let result = 0;
    for (let i = 0; i < s.length; i += 1) {
        // console.log(s[i]);
        console.log(romanNumber[s[i]])
        const curNum = romanNumber[s[i]];
        const nextNum = romanNumber[s[i+1]];
        
        if (curNum < nextNum) {
            result += nextNum - curNum;
            i++;
        } else {
            result += curNum;
        }
    }
    return result;
    
};