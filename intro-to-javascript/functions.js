function returnName (name) {
    return name
}
console.log(returnName('Zevi Evers'))

let uly = returnName('Zevi')
console.log(uly)

function makeACharacter(Class, Race) {
    console.log('You made a character thats ' + Race + Class + '.')
}
makeACharacter('bard ', 'a halfling ');
makeACharacter('fighter ','a human ')

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}
console.log(subtractNumbers(10, 5));
console.log(addNumbers(7, 5));

let computers = ['mac', 'lenovo'];

function loopThroughAnAraay(array) {
    for (let i = 0; i <array.length; i++) {
        console,log(array[i]);
    }
}
loopThroughAnAraay(computers);












