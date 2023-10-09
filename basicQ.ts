//Q1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.
let first_name: string = "Maty";
let age: number = 22;
console.log(first_name, age)

//Q2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.


//Q3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.  
let x: number = 22;
let y: number = 53;
let msg: string = "Hello, Maty";
let msg2: string = "Welcome to my world!";
let bool: boolean = true;
let undefinedVar: undefined = undefined;

let sum: number = x+y;
console.log(sum);

let greet: string = msg + " " +msg2;
console.log("Greetings:", greet);

if (undefinedVar === undefined) {
    console.log("undefinedVar is undefined.");
} else {
    console.log("undefinedVar is defined.");
}

//Q4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.  
// let num: number = 13;
// num = "Maits";

// let number = 12;
// number = "Medha";

// console.log(num, number);

//Q5.  Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.  
let a = 13;
let last_name = "singh";
let boolean = true;

console.log ("type of a:", typeof a)
console.log ("type of last_name:",typeof last_name)
console.log ("type of boolean:",typeof boolean)

//Q6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt().  
 let b: number = 25;
 let newVar: string = b.toString();
 console.log(typeof newVar, newVar);

 let str: string = "112";
 let newNum: number = parseInt(str);
 console.log(typeof newNum, newNum);

//Q7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.  


//Q8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.  
const fruits: string[] = ["Mango", "Pineapple", "Orange", "Strawberry"];

fruits.push("Banana");
fruits.push("Blueberry");
fruits.pop(); 

console.log("Array Elements:");
for (const fruit of fruits) {
  console.log(fruit);
}

const searchFruit = "strawberry";
const isFruitInArray = fruits.includes(searchFruit);
console.log(`Is ${searchFruit} in the array? ${isFruitInArray ? "Yes" : "No"}`);

const indexOfruit = fruits.indexOf("Pineapple");
console.log(`Index of "Pineappple" in the array is: ${indexOfruit}`);


//Q9.Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.
enum Color {
    Red,
    Green,
    White,
    Blue,
  }
  let selectedColor: Color = Color.Blue;
  console.log("Selected Color:", selectedColor);

//Q10. Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also declare a variable called 'isUndefined' and assign it an undefined value.  
let isNull: null = null;
let isUndefined: undefined = undefined; 
console.log( isNull, isUndefined);

