function countLetters(string) {
    myObject = {};
    string.forEach(function(el, i) {
        keyExists = myObject.hasOwnProperty(el)
        if (keyExists) {
            myObject[el].push(string.indexOf(el, i));
        } else {
            myObject[el] = [(string.indexOf(el))];
        }
    });
    return myObject;
}
function removeSpaces(string) {
    return string.replace(/\s/g, '');
}
function intoArray(string) {
    return string.split("");
}
function allFunctions(string) {
    let spaceRemoved = removeSpaces(string);
    let nowAnArray = intoArray(spaceRemoved);
    let lettersCounted = countLetters(nowAnArray);
    return lettersCounted;
}
console.log(allFunctions("hello there"))
