/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    const need = {};
    const window = {};

    for (const c of t) {
        need[c] = (need[c] || 0) + 1;
    }

    let left = 0, right = 0;
    let valid = 0;
    let start = 0, len = Infinity;

    while (right < s.length) {
        const c = s[right];
        right++;

        if (need[c] !== undefined) {
            window[c] = (window[c] || 0) + 1;
            if (window[c] === need[c]) {
                valid++;
            }
        }

        while (valid === Object.keys(need).length) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            const d = s[left];
            left++;

            if (need[d] !== undefined) {
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }

    return len === Infinity ? "" : s.substring(start, start + len);
};
