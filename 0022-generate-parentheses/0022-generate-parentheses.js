/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    const dfs = (str, openCnt, closeCnt) => {
        if(closeCnt > openCnt) return;
        if(openCnt > n || closeCnt > n) return;
        if(openCnt === n && closeCnt === n) return ans.push(str);

        dfs(str + '(', openCnt + 1, closeCnt);
        dfs(str + ')', openCnt, closeCnt + 1);
    }

    dfs('', 0, 0);

    return ans;
};