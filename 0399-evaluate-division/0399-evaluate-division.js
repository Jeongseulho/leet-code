/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adjList = {};
    for(let i = 0; i < equations.length; i++) {
        const [s, e] = equations[i];
        const weight = values[i];

        if(adjList.hasOwnProperty(s)) adjList[s].push([e, weight]);
        else adjList[s] = [[e, weight]];

        if(adjList.hasOwnProperty(e)) adjList[e].push([s, 1/weight]);
        else adjList[e] = [[s, 1/weight]];
    }

    const dfs = (start, end, visited) => {
        if(start === end) return 1;
        visited.add(start);

        for (const [next, weight] of adjList[start]) {
            if(!visited.has(next)) {
                const res = dfs(next, end, visited);
                if(res !== -1) return weight * res;
            }
        } 
        return -1;
    }

    const ans = [];

    for (const [s, e] of queries) {
        if (!adjList[s] || !adjList[e]) {
            ans.push(-1);
        } else {
            ans.push(dfs(s, e, new Set()));
        }
    }

    return ans;
};