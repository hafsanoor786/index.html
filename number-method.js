// 1 : toFixed()

// Explanation
// toFixed() number ko fixed decimal places tak round karta hai.

//Example
let num = 3.14159;
console.log(num.toFixed(2)); // Output: 3.14

// Question
let num = 45.678;
console.log(num.toFixed(1)); // Output: 45.7


// 2 : toString()

// Explanation
// toString() number ko string mein convert karta hai.

//Example
let num = 45.678;
console.log(num.toString()); // Output: "45.678"

// Question
let num2 = 123;
console.log(num2.toString()); // Output: "123"


// 3 : toExponential()

// Explanation
// toExponential() number ko exponential notation mein convert karta hai.

//Example
let num = 12345;
console.log(num.toExponential(2)); // Output: "1.23e+4"

// Question
let num3 = 67890;
console.log(num3.toExponential(1)); // Output: "6.8e+4"


// 4 : toPrecision()

// Explanation
// toPrecision() number ko specified precision ke saath format karta hai.

//Example
let num = 3.14159;
console.log(num.toPrecision(3)); // Output: "3.14"

// Question
let num4 = 0.00012345;
console.log(num4.toPrecision(2)); // Output: "0.00012"


// 5 : valueOf()

// Explanation
// valueOf() number ka primitive value return karta hai.

//Example
let num = new Number(123);
console.log(num.valueOf()); // Output: 123

// Question
let num5 = new Number(456);
console.log(num5.valueOf()); // Output: 456


// 6 : Number()

// Explanation
// Number() function kisi value ko number mein convert karta hai.

//Example
let str = "123";
console.log(Number(str)); // Output: 123

// Question
let bool = true;
console.log(Number(bool)); // Output: 1


// 7 : parseInt()

// Explanation
// parseInt() function string ko integer mein convert karta hai.

//Example
let str = "123.45";
console.log(parseInt(str)); // Output: 123

// Question
let str2 = "456abc";
console.log(parseInt(str2)); // Output: 456


// 8 : parseFloat()

// Explanation
// parseFloat() function string ko floating-point number mein convert karta hai.

//Example
let str = "123.45";
console.log(parseFloat(str)); // Output: 123.45

// Question
let str3 = "456.78xyz";
console.log(parseFloat(str3)); // Output: 456.78


// 9 : isNaN()

// Explanation
// isNaN() function check karta hai ki given value NaN (Not-a-Number) hai ya nahi.

//Example
let value = "abc";
console.log(isNaN(value)); // Output: true

// Question
let value2 = 123;
console.log(isNaN(value2)); // Output: false


// 10 : isFinite()

// Explanation
// isFinite() function check karta hai ki given value finite number hai ya nahi.

//Example
let value = 123;
console.log(isFinite(value)); // Output: true

// Question
let value2 = Infinity;
console.log(isFinite(value2)); // Output: false






// 🔗 Combined Examples

// Examle 1:

let price = 99.456;
let result = Number(price.toFixed(2));
console.log(result); // 99.46

// Example 2:

let value = "150.75";
console.log(parseInt(value)); // 150
console.log(parseFloat(value)); // 150.75




// 🧩 Final Problem
// ❓ Problem:

// Ek online shop me item ki price "245.678" hai.

// 1 : String ko number me convert karo
// 2 : Price ko 2 decimal places tak round karo
// 3 : Console me print karo


// 🧩 Solution:

let price = "245.678";

let numberPrice = Number(price);
let finalPrice = numberPrice.toFixed(2);

console.log(finalPrice); // "245.68"


// 🔹 Explanation:
// Number() ne string ko number banaya
// toFixed(2) ne 2 decimal places tak round kiya