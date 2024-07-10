/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0;
    let i = 0;
    
    while (i < chars.length) {
        let char = chars[i];
        let count = 0;
        
        // Count the number of occurrences of the current character
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }
        
        // Store the current character
        chars[index++] = char;
        
        // If the character count is greater than 1, store the count as well
        if (count > 1) {
            for (let c of String(count)) {
                chars[index++] = c;
            }
        }
    }
    
    // The length of the modified array
    return index;
};
