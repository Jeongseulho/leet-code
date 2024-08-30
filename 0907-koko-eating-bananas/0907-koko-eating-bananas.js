/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let minSpeed = 0, maxSpeed = Math.max(...piles);
    while(minSpeed <= maxSpeed) {
        const midSpeed = Math.floor((minSpeed + maxSpeed) / 2);
        const hourCnt = piles.reduce((acc, cur) => acc + Math.ceil(cur/midSpeed) , 0);
        if(hourCnt <= h) maxSpeed = midSpeed - 1;
        else minSpeed = midSpeed + 1;
    }

    return minSpeed;
};