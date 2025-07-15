const findTheOldest = function(people) {

    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;

        if (personAge > oldestAge) {
            return person;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
