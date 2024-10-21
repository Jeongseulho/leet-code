/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    const adjList = Array.from({ length: numCourses }, () => []);
    prerequisites.forEach(([course, pre]) => {
        adjList[course].push(pre);
    });

    const visited = new Array(numCourses).fill(false);

    const hasCycle = (course, path) => {
        if (path[course]) return true;
        if (visited[course]) return false;

        path[course] = true;
        visited[course] = true;

        for (const pre of adjList[course]) {
            if (hasCycle(pre, path)) return true;
        }

        path[course] = false;

        return false;
    };

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && hasCycle(i, new Array(numCourses).fill(false))) {
            return false;
        }
    }

    return true;
};
