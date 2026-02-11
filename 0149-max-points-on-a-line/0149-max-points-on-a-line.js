/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const n = points.length;
  if (n <= 2) return n;

  let maxCnt = 0;
  for (let i = 0; i < n; i++) {
    const slopeCntMap = new Map();
    for (let j = i + 1; j < n; j++) {
      const dx = points[i][0] - points[j][0];
      const dy = points[i][1] - points[j][1];

      const slope = dx === 0 ? 'vertical' : dy / dx;
      slopeCntMap.set(slope, (slopeCntMap.get(slope) ?? 0)+ 1);
      maxCnt = Math.max(maxCnt, slopeCntMap.get(slope) + 1);
    }
  }

  return maxCnt;
};