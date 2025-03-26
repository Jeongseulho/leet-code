/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 0;
    let ans = '';
    while(true) {
        let s = strs[0][i];
        if(!s) break;
        for(const str of strs) {
            if(s !== str[i]) return ans;
        }
        ans += s;
        i += 1;
    }

    return ans;
};