/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    const adjList = Array.from({ length: numCourses }, () => []);
    prerequisites.forEach(([course, pre]) => {
        adjList[pre].push(course);
    });

    const visited = new Array(numCourses).fill(false);
    const path = new Array(numCourses).fill(false);

    const hasCycle = (course) => {
        if(path[course]) return true;
        if(visited[course]) return false;

        visited[course] = true;
        path[course] = true;
        for(const nextCourse of adjList[course]) {
            if(hasCycle(nextCourse)) return true;
        }
        path[course] = false;

        return false;
    };

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && hasCycle(i)) {
            return false;
        }
    }

    return true;
};
