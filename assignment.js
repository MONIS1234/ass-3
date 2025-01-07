//write a condition to check greatest number among the three numbers
//let a=20
// let b=30
//let c=40

let a = parseFloat(prompt("Enter a: "));
let b = parseFloat(prompt("Enter b: "));
let c = parseFloat(prompt("Enter c: "));

if ((a > b) && (a > c)) {
    console.log("The greatest number is:", a);
} else if ((b > a) && (b > c)) {
    console.log("The greatest number is:", b);
} else {
    console.log("The greatest number is:", c);
}
