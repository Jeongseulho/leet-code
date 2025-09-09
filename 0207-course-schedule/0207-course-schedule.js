/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = Array.from({length: numCourses }, () => []);
    prerequisites.forEach(([course, pre]) => {
        adjList[pre].push(course);
    })

    const visited = new Set();
    const path = new Set();

    const hasCycle = (course) => {
        if (path.has(course)) return true;
        if (visited.has(course)) return false;

        visited.add(course);
        path.add(course);

        for (const nextCourse of adjList[course]) {
            if (hasCycle(nextCourse)) return true;
        }

        path.delete(course);
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited.has(i)) {
            if (hasCycle(i)) return false;
        }
    }

    return true;
};