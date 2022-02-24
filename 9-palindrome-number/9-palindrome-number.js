/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let b = [];
    let c = [];
    let strX = x.toString();
    b = strX.split('');

    for (let i = 0; i <= strX.length; i += 1) {
      c.push(b[strX.length-i]);
    }

    const strRvsX = c.join('');

    if (strRvsX === strX) {
      return true;
    } else {
      return false;
    }    
};