/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const adjList = Array.from({ length: n }, () => []);
    const reverseAdjList = Array.from({ length: n }, () => []);
    connections.forEach(([from, to]) => {
        adjList[from].push(to);
        reverseAdjList[to].push(from);
    });
    let cnt = 0;
    const visited = Array(n).fill(false);
    
    const dfs = (node) => {
        visited[node] = true;
        
        adjList[node].forEach((to) => {
            if (!visited[to]) {
                cnt += 1;
                dfs(to);
            }
        });
        
        reverseAdjList[node].forEach((from) => {
            if (!visited[from]) dfs(from);
        });
    };
    
    dfs(0);
    return cnt;
};
