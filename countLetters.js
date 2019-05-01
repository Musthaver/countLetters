function countLetters(string) {
    string = string.replace(/\s/g, '');
    string = string.split("");
    myObject = {};
 string.forEach(function(el) {
     if (myObject.hasOwnProperty(el)) {
        myObject[el] += 1;
     } else {
        myObject[el] = 1;
     }
    });
  return myObject; 
}

console.log(countLetters("Hello There"));