/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let plantCnt = 0;
    if(!flowerbed[0] && !flowerbed[1]) {
        plantCnt += 1;
        flowerbed[0] = 1;
    }
    for(let i = 1; i < flowerbed.length - 1; i++) {
        const [l, m, r] = [flowerbed[i - 1], flowerbed[i], flowerbed[i + 1]];
        if(!l && !m && !r) {
            plantCnt += 1;
            flowerbed[i] = 1;
        }
    }
    if(!flowerbed[flowerbed.length - 2] && !flowerbed[flowerbed.length - 1]) {
        plantCnt += 1;
    }
    return plantCnt >= n ? true : false; 
};