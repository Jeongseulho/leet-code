/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const ans = {};

    for(const s of strs) {
        const key = s.split('').sort().join('');
        if(!ans.hasOwnProperty(key)) ans[key] = [];
        ans[key].push(s);
    }

    return Object.values(ans);
};