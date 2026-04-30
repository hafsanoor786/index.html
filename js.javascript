// STRING METHODS

// 1. TO UPPERCASE
// string ke sare letter ko capital letter me convert karna

let text = "hello world";
console.log (text.toUpperCase());


// 2. TO LOWERCASE
// string ke sare letter ko small letter me convert karna

let username = "JOHN DOE";
console.log (username.toLowerCase());


// 3. TRIM
// string ke starting aur ending me jo extra space hai usko remove karna

let name = "   John Doe   ";
console.log (name.trim());


// 4. SliCE
// string ke kisi bhi part ko extract karna


let sentence = "hello world";
console.log (sentence.slice(0,7));


// 5. SUBSTRING
// string ke kisi bhi part ko extract karna

let message = "hello world";
console.log (message.substring(0,-1));


// 6. REPLACE
// string ke kisi part ko replace karna

let greeting = "hello world";
console.log (greeting.replace("hello", "Hi"));


// 7. INCLUDES
// yhe check krta hai ke value string me hai ya nahi phir is ka answer bullean me daita hai

let phrase = "hello world";
console.log (phrase.includes("world"));


// 8. INDEXOF
// string ke kisi part ki position batata hai ke yhe index kahan se start ho raha hai

let text1 = "hello world";
console.log (text1.indexOf("hello"));