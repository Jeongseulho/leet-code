/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjList = Array.from({ length : numCourses }, () => []);
    const revAdjList = Array.from({ length : numCourses }, () => []);

    prerequisites.forEach(([v1, v2]) => {
        adjList[v1].push(v2);
        revAdjList[v2].push(v1);
    });

    let needVisit = [];
    for(let courseNum = 0; courseNum < numCourses; courseNum++) {
        if(!adjList[courseNum].length) needVisit.push(courseNum);
    }

    const visited = [];
    while(needVisit.length) {
        let visitableCourse;
        for(const course of needVisit) {
            const preCourses = adjList[course];
            if(!preCourses.length || preCourses.every((preCourse) => visited.includes(preCourse))) {
                visitableCourse = course;
                needVisit = needVisit.filter((course) => course !== visitableCourse);
                break;
            }
        }
        if(visitableCourse === undefined) return [];

        if(visited.includes(visitableCourse)) continue;

        visited.push(visitableCourse);
        revAdjList[visitableCourse].forEach((next) => needVisit.push(next));
    }
    
    return visited.length === numCourses ? visited : [];
};