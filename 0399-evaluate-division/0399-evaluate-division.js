/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adj = {};
    equations.forEach(([from, to], i) => {
        if (!(from in adj)) adj[from] = [];
        adj[from].push([to, values[i]]);

        if (!(to in adj)) adj[to] = [];
        adj[to].push([from, 1 / values[i]]);
    });

    console.log(adj);
    
    const bfs = (start, target) => {
        if (!(start in adj) || !(target in adj)) return -1;
        if (start === target) return 1;
        
        const visited = [start];
        const needVisit = [[start, 1]];
        while(needVisit.length) {
            const [node, weightSum] = needVisit.shift();
            
            for (const [to, weight] of adj[node]) {
                if(!visited.includes(to)) {
                    const currentWeight = weightSum * weight;
                    if(to === target) return currentWeight;
                    needVisit.push([to, currentWeight]);
                    visited.push(to);
                }
            }
        }
        return -1;
    }
    
    const ans = [];
    for(const [from, to] of queries) {
        ans.push(bfs(from, to));
    }

    return ans;
};

