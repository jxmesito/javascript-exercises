const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    let answer = "";
    for (let index = 0; index <= num-1; index++) {
        answer += string;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
