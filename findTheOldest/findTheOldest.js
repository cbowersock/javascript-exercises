let findTheOldest = function (people) {

    const ages = people.map(person => {
        if ('yearOfDeath' in person) {
            return person.yearOfDeath - person.yearOfBirth;
        } 
        else {
            return 2020 - person.yearOfBirth;
        }
    })
    
    const oldestPerson = ages.indexOf(Math.max(...ages))

    return people[oldestPerson]
}

module.exports = findTheOldest
