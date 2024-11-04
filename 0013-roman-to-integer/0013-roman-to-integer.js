/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hash = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }

    let num = 0;
    for(let i = 0; i < s.length - 1; i++) {
        if(hash[s[i]] < hash[s[i + 1]]) num -= hash[s[i]];
        else num += hash[s[i]];
    }

    return num + hash[s[s.length - 1]];
};