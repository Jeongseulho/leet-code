/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const adj = (gene1, gene2) => {
        let diffCnt = 0;
        for(let i = 0; i < 8; i++) {
            if (gene1[i] !== gene2[i]) diffCnt += 1;
            if (diffCnt > 1) return false;
        }
        return true;
    }
    const needVisit = [[startGene, 0]];
    const visited = [startGene];
    while (needVisit.length) {
        const [gene, count] = needVisit.shift();
        for (const geneOfBank of bank) {
            if(!visited.includes(geneOfBank) && adj(gene, geneOfBank)) {
                if(geneOfBank === endGene) return count + 1;
                needVisit.push([geneOfBank, count + 1]);
                visited.push(geneOfBank);
            }
        }
    }

    return -1;
};