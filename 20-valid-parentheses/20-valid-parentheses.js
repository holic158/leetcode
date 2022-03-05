/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stk = [];
    const arrS = s.toString().split('');

    for (let i  = 0; i < arrS.length; i += 1) {
        let valueS = arrS[i];
        console.log('valueS >>>>>', valueS);
        if (pairs[valueS]) { // (, {, [ 있으면 stack에 push 
            stk.push(valueS); 
        } else { // ), }, ] 있으면 이전 것 pop 처리
            let chkBr = stk.pop(); // 이전 것 pop해서 넣기
            if (pairs[chkBr] !== valueS) {
                return false;
            }
        }
    };
    return stk.length === 0;

}