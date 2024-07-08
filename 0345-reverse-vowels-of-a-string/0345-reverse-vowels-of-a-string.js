/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arr = s.split('');
    let [l, r] = [0, s.length - 1];
    while (l < r) {
        while (l < r && !vowels.includes(arr[l].toLowerCase())) l += 1;
        while (l < r && !vowels.includes(arr[r].toLowerCase())) r -= 1;
        if (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l += 1;
            r -= 1;
        }
    }
    return arr.join('');
};