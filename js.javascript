🔹 1. Method Name

toUpperCase()

2. Definition in Easy Words

This method converts all letters of a string into capital letters.

3. Syntax
string.toUpperCase()
4. Why We Use This Method

We use it when we want text in uppercase (e.g., headings, user names).

5. One Real Code Example
let text = "hello";
console.log(text.toUpperCase());
6. Output
HELLO
7. Step-by-Step Explanation
A variable text stores "hello"
toUpperCase() converts it to capital letters
Console prints "HELLO"
8. Common Beginner Mistake

Forgetting parentheses: toUpperCase ❌ instead of toUpperCase() ✔

9. Practice Question

Convert "javascript" into uppercase.

🔹 2. Method Name

toLowerCase()

2. Definition

Converts all letters into small letters.

3. Syntax
string.toLowerCase()
4. Why We Use This Method

Used when comparing text (case-insensitive).

5. Example
let text = "HELLO";
console.log(text.toLowerCase());
6. Output
hello
7. Explanation
"HELLO" ko small letters me convert kiya
Output "hello"
8. Mistake

Sochna ke original string change ho jati hai ❌

9. Practice

Convert "PAKISTAN" into lowercase.

🔹 3. Method Name

trim()

2. Definition

Removes extra spaces from start and end.

3. Syntax
string.trim()
4. Why Use

Forms me unnecessary spaces remove karne ke liye

5. Example
let text = "  hello  ";
console.log(text.trim());
6. Output
hello
7. Explanation
Start/end spaces remove ho gaye
8. Mistake

Sochna ke middle spaces bhi remove hoti hain ❌

9. Practice

Remove spaces from " JS "

🔹 4. Method Name

slice()

2. Definition

Extracts part of a string.

3. Syntax
string.slice(start, end)
4. Why Use

Specific part nikalne ke liye

5. Example
let text = "JavaScript";
console.log(text.slice(0,4));
6. Output
Java
7. Explanation

Index 0 se 4 tak characters liye

8. Mistake

End index include nahi hota

9. Practice

"Programming" se "gram" nikalo

🔹 5. Method Name

substring()

2. Definition

Part of string return karta hai

3. Syntax
string.substring(start, end)
4. Why Use

Text ka portion lene ke liye

5. Example
let text = "HelloWorld";
console.log(text.substring(0,5));
6. Output
Hello
7. Explanation

0 se 5 tak characters liye

8. Mistake

Negative values use karna ❌

9. Practice

"Pakistan" se "Pak" nikalo

🔹 6. Method Name

replace()

2. Definition

Ek word ko dusre se replace karta hai

3. Syntax
string.replace("old","new")
4. Why Use

Text update karne ke liye

5. Example
let text = "I like cats";
console.log(text.replace("cats","dogs"));
6. Output
I like dogs
7. Explanation

"cats" ko "dogs" se replace kiya

8. Mistake

Sirf pehla match replace hota hai

9. Practice

"Hello Ali" me Ali ko Ahmed karo

🔹 7. Method Name

includes()

2. Definition

Check karta hai ke word exist karta hai ya nahi

3. Syntax
string.includes("word")
4. Why Use

Search functionality

5. Example
let text = "I love JS";
console.log(text.includes("JS"));
6. Output
true
7. Explanation

JS string me present hai

8. Mistake

Case-sensitive hota hai

9. Practice

Check karo "Hello" me "hi" hai ya nahi

🔹 8. Method Name

indexOf()

2. Definition

Word ka index return karta hai

3. Syntax
string.indexOf("word")
4. Why Use

Position find karne ke liye

5. Example
let text = "Hello";
console.log(text.indexOf("e"));
6. Output
1
7. Explanation

"e" index 1 par hai

8. Mistake

Not found = -1

9. Practice

"Banana" me "a" ka index find karo

🔹 9. Method Name

split()

2. Definition

String ko array me convert karta hai

3. Syntax
string.split(" ")
4. Why Use

Words separate karne ke liye

5. Example
let text = "I love JS";
console.log(text.split(" "));
6. Output
["I","love","JS"]
7. Explanation

Space ke basis par split hua

8. Mistake

Separator galat dena

9. Practice

"apple,banana,mango" ko split karo

🔹 10. Method Name

concat()

2. Definition

Do strings ko join karta hai

3. Syntax
string1.concat(string2)
4. Why Use

Text combine karne ke liye

5. Example
let a = "Hello ";
let b = "World";
console.log(a.concat(b));
6. Output
Hello World
7. Explanation

Dono strings join ho gayi

8. Mistake

Space bhool jana

9. Practice

"Good" aur "Morning" ko join karo
