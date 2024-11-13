/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adj = {};
    for(let i = 0; i < values.length; i++) {
        const [v1, v2] = equations[i];
        const val = values[i];
        if(adj.hasOwnProperty(v1)) adj[v1].push([v2, val]);
        else adj[v1] = [[v2, val]];
        if(adj.hasOwnProperty(v2)) adj[v2].push([v1, 1 / val]);
        else adj[v2] = [[v1, 1 / val]];
    }
    
    const ans = [];

    const dfs = (start, end) => {
        const needVisit = [[start, 1]];
        const visited = new Set();
        visited.add(start);
        while(needVisit.length) {
            const [node, weights] = needVisit.pop();
            for(const [next, val] of adj[node]) {
                if(!visited.has(next)) {
                    if(next === end) return weights * val;
                    needVisit.push([next, weights * val]);
                    visited.add(next);
                }
            }
        }
        return -1;
    }

    queries.forEach(([start, end]) => {
        if(!adj.hasOwnProperty(start) || !adj.hasOwnProperty(end)) return ans.push(-1);
        if(start === end) return ans.push(1);
        ans.push(dfs(start, end));
    })

    return ans;
};