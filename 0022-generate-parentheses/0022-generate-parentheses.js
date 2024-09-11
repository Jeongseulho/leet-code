/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    const combination = (comb, openCnt, closeCnt) => {
        if(closeCnt > openCnt || closeCnt > n || openCnt > n) return;
        if(comb.length === n * 2) return ans.push(comb);

        combination(comb + '(', openCnt + 1, closeCnt);
        combination(comb + ')', openCnt, closeCnt + 1);
    }

    combination('', 0, 0);
    return ans;
};