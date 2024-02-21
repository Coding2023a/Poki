let addition = 1 + 1
let subtraction = 2 - 1
let multiplication = 2 * 2
let division = 4 / 2
let remainder = 5 % 2
console.log(addition)
console.log(subtraction)
console.log(multiplication)
console.log(division)
console.log(remainder)

let mood = 3

if (mood > 90) {
    console.log("wow your mad")
}else if (mood >70) {
console.log("angry")
}else if (mood < 5) {
console.log("liar")
}else if (mood < 40) {
    console.log("happy")
}else {
    console.log("nuetral")
}


let codingLanguage = "JavaScript"
codingLanguage = ""

if (codingLanguage === "JavaScript") {
    console.log("your a frontend developer! \u{1F603}")
} else if (codingLanguage === "Python") {
    console.log("your a frontend developer! \u{1F60E}")
} else if (codingLanguage === "") {
    console.log("it doesnt look like your a developer \u{1F623}")
} else {
    console.log("Are you a developer? \u{1f914}")
}