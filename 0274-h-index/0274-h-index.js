/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let maxH = 0;
    for(let i = 0; i < citations.length; i++) {
        const morePaper = citations.length - i;
        const num = citations[i];
        const h = Math.min(morePaper, num);
        maxH = Math.max(h, maxH);
    }

    return maxH;
};