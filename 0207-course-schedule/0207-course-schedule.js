/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 인접 리스트 생성
    const adjList = Array.from({ length: numCourses }, () => []);
    prerequisites.forEach(([course, pre]) => {
        adjList[course].push(pre);
    });

    // 방문 여부와 경로 스택을 추적하기 위한 배열
    const visited = new Array(numCourses).fill(false);
    const recStack = new Array(numCourses).fill(false);

    // DFS를 통한 사이클 검사 함수
    const hasCycle = (course) => {
        if (recStack[course]) return true; // 현재 경로에 다시 등장하면 사이클이 발생한 것
        if (visited[course]) return false; // 이미 방문한 노드인 경우 더 탐색하지 않음

        visited[course] = true;
        recStack[course] = true;

        for (const pre of adjList[course]) {
            if (hasCycle(pre)) return true; // 재귀적으로 사이클이 있는지 검사
        }

        recStack[course] = false; // 현재 경로에서 제거
        return false;
    };

    // 모든 코스를 순회하며 사이클이 있는지 확인
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && hasCycle(i)) {
            return false; // 사이클이 발견되면 false 반환
        }
    }

    return true; // 모든 코스를 다 순회한 후에도 사이클이 없으면 true 반환
};
