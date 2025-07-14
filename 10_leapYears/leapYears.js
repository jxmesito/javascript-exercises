const leapYears = function(year) {
    const firstCase = year % 4 === 0;
    const secondCase = year % 100 === 0;
    const thirdCase = year % 400 === 0;

    if ((firstCase) && (!secondCase || thirdCase)) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = leapYears;
