/**
 * Make sure what is prefix
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    /**
    * f f
    * fl fl
    * flo flo fli
    */
    let firstStr = strs[0];
    for (let i = 0; i < firstStr.length; i += 1) {
        for (let j = 1; j < strs.length; j += 1) {
            if (strs[0][i] != strs[j][i]) {
                return firstStr.slice(0,i);
            }
        }
    }
    return firstStr;
};