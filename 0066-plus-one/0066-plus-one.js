/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //let sDigits = String(Number(digits.join(''))+1).split('');
    //return sDigits.map((val)=>Number(val));
    
    for (let i = digits.length -1; i >=0; i--) {
        if (++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
};


      // for(var i = digits.length - 1; i >= 0; i--){
      //   if(++digits[i] > 9) digits[i] = 0;
      //   else return digits;
      // }
      // digits.unshift(1);
      // return digits;