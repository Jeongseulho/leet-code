/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {

    const isAdj = (v1, v2) => {
        let diffCnt = 0;
        for(let i = 0; i < 8; i++) {
            if(v1[i] !== v2[i]) diffCnt += 1;
        }

        return diffCnt === 1;
    };

    const needVisit = [[startGene, 0]];
    const visited = new Set();
    visited.add(startGene);

    while(needVisit.length) {
        const [cur, cnt] = needVisit.shift();
        for(const next of bank) {
            if(!visited.has(next) && isAdj(cur, next)) {
                if(next === endGene) return cnt + 1;
                visited.add(next);
                needVisit.push([next, cnt + 1]);
            }
        }
    }

    return -1;
};