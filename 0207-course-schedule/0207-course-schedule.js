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
    const onPath = new Array(numCourses).fill(false);

    const hasCycle = (course) => {
        if (onPath[course]) return true;
        if (visited[course]) return false; 

        visited[course] = true;
        onPath[course] = true;

        for (const nextCourse of adjList[course]) {
            if (hasCycle(nextCourse)) return true;
        }

        onPath[course] = false;
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && hasCycle(i)) return false;
    }

    return true;
};
