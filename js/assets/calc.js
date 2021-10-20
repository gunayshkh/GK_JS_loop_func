// let a;
// let b;
// a = Number(prompt("enter the num"))
// b = Number(prompt("enter the num"))



// if (a + b == 50 || a == 50 || b == 50) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let sum = 0;

// for (i = 1; i <= 1000; i++) {
//     if (i % 15 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);


// if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// **hometast

// 1st one


// function rectangle(a, b) {
//     let perimeter = (a + b) * 2
//     return perimeter
// }
// let a = Number(prompt("enter the num"));
// let b = Number(prompt("enter the num"));


// console.log(`The perimeter of a rectangle: ${rectangle(a, b)}`);


// 2nd one 

// let reversed = 0;
// let num = Number(prompt("enter the num"));

// while (num != 0) {
//     lastNum = num % 10;
//     reversed = reversed * 10 + lastNum;
//     num = Math.floor(num / 10);
// }
// console.log("Reversed number: " + reversed);

//3rd one

let text = prompt("enter the word");

function sortAlphabetically(text) {
    return text.split('').sort().join('')
}
console.log(sortAlphabetically(text));