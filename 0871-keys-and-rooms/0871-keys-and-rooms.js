/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = Array(rooms.length).fill(false);
    const dfs = (roomNum) => {
        if(visited[roomNum]) return;
        visited[roomNum] = true;
        const keys = rooms[roomNum];
        keys.forEach((key) => {
            dfs(key);
        });
    }

    dfs(0);

    return visited.every((visitBool) => visitBool);
};