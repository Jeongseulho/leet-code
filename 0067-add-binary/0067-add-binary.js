/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let ans = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        const valA = i >= 0 ? Number(a[i]) : 0;
        const valB = j >= 0 ? Number(b[j]) : 0;
        
        const sum = valA + valB + carry;
        
        ans.push(sum % 2);
        carry = Math.floor(sum / 2);
        
        i--;
        j--;
    }

    return ans.reverse().join('');
};