/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let last = -1;
    let start = 0;
    const ans = [];

     for(let i = 0; i < s.length; i++) {
        last = Math.max(s.lastIndexOf(s[i]), last);
        if(i === last) {
            ans.push(last - start + 1);
            start = last + 1;
        }
     }

     return ans;
};