/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    const originCloneMap = new Map();
    const dfs = (origin) => {
        if(!origin) return null;
        if(originCloneMap.has(origin)) return originCloneMap.get(origin);

        const clone = new _Node(origin.val);
        originCloneMap.set(origin, clone);

        for(const originNeighbor of origin.neighbors) {
            clone.neighbors.push(dfs(originNeighbor));
        }

        return clone;
    }

    return dfs(node);
};