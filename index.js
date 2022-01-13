function findMatching(array, string) {
    const find = array.filter(name => name.toLowerCase() === string.toLowerCase());
    return find;
}

function fuzzyMatch (array, string) {
    const letter = array.filter(character => character.substring(0, 1) === string.substring(0, 1))
    return letter
}

function matchName (array, string) {
    const driverObj = array.filter(obj => obj.name === string)
    return driverObj
}