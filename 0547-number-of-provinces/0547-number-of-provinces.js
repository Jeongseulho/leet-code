/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = Array(n).fill(false);
    let ans = 0;

    while(visited.some((visitBool) => !visitBool)) {
        const startNode = visited.findIndex((visitBool) => !visitBool)
        const needVisit = [startNode];
        while(needVisit.length) {
            const node = needVisit.pop();
            if(!visited[node]) {
                visited[node] = true;
                for(let adjNode = 0; adjNode < n; adjNode++) {
                    if(isConnected[node][adjNode]) needVisit.push(adjNode);
                }
            }
        }
        ans += 1;
    }
    
    return ans;
};