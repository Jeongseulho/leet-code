/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const altitudes = Array(gain.length + 1).fill(0);
    for(let i = 1; i < altitudes.length; i++) {
        altitudes[i] = altitudes[i - 1] + gain[i - 1];
    }

    return Math.max(...altitudes);
};