/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

function findAll(s, t, i, j, dp) {
    if (j < 0) {
        return 1
    }
    if (i < 0) {
        return 0
    }
    if (dp[i][j] != -1) {
        return dp[i][j]
    }
    if (s[i - 1] == t[j - 1]) {
        let stayT = findAll(s, t, i - 1, j, dp)
        let leaveT = findAll(s, t, i - 1, j - 1, dp)
        return dp[i][j] = (stayT + leaveT)
    }
    else {
        return dp[i][j] = findAll(s, t, i - 1, j, dp)
    }

}
var numDistinct = function (s, t) {
    let dp = new Array(s.length + 1).fill(-1).map(() => new Array(t.length + 1).fill(-1))
    let res =  findAll(s, t, s.length, t.length, dp)
    if(res > 2147483647){
        return -1
    }
    else{
        return res
    }
};
