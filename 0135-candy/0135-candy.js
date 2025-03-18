/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if(ratings.length === 1) return 1;
    if(ratings.length === 2) {
        if(ratings[0] === ratings[1]) return 2;
        else return 3;
    }

    let ans = 0;
    let candies = Array(ratings.length).fill(0);
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i - 1] < ratings[i]) {
            candies[i] = candies[i - 1] + 1;
        } 
    }

    for(let i = ratings.length - 2; i > -1; i--) {
        if(ratings[i + 1] < ratings[i]) {
            candies[i] = Math.max((candies[i + 1] + 1), candies[i]);
        }
    }

    return candies.reduce((acc, cur) => acc + cur, 0) + ratings.length;
};