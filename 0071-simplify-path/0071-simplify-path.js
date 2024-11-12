/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    const ans = [];
    path = path.split('/').filter((ele) => {
        if(ele === '/' || ele === '.' || ele === '') return false;
        return true;
    })

    for(const ele of path) {
        if(ele === '..') {
            if(ans.length) ans.pop();
        } else ans.push(`/${ele}`);
    }

    if(!ans.length) return '/'
    return ans.join('');
};