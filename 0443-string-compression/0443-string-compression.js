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
        
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }
        
        chars[index++] = char;
        
        if (count > 1) {
            for (let c of String(count)) {
                chars[index++] = c;
            }
        }
    }
    
    return index;
};
