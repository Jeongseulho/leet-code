/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const ans = [];
    potions.sort((a, b) => a - b);

    spells.forEach((spell) => {
        let low = 0, high = potions.length - 1;
        let find = success / spell;
        while(low <= high) {
            const mid = Math.floor((low + high) / 2);
            if(potions[mid] >= find) high = mid - 1;
            else low = mid + 1;
        }

        ans.push(potions.length - low);
    })

    return ans;
};