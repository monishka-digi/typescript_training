//Q1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.
var first_name = "Maty";
var age = 22;
console.log(first_name, age);
//Q2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.
//Q3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.  
var x = 22;
var y = 53;
var msg = "Hello, Maty";
var msg2 = "Welcome to my world!";
var bool = true;
var undefinedVar = undefined;
var sum = x + y;
console.log(sum);
var greet = msg + " " + msg2;
console.log("Greetings:", greet);
if (undefinedVar === undefined) {
    console.log("undefinedVar is undefined.");
}
else {
    console.log("undefinedVar is defined.");
}
//Q4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.  
// let num: number = 13;
// num = "Maits";
// let number = 12;
// number = "Medha";
// console.log(num, number);
//Q5.  Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.  
var a = 13;
var last_name = "singh";
var boolean = true;
console.log("type of a:", typeof a);
console.log("type of last_name:", typeof last_name);
console.log("type of boolean:", typeof boolean);
//Q6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt().  
var b = 25;
var newVar = b.toString();
console.log(typeof newVar, newVar);
var str = "112";
var newNum = parseInt(str);
console.log(typeof newNum, newNum);
//Q7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.  
//Q8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.  
var fruits = ["Mango", "Pineapple", "Orange", "Strawberry"];
fruits.push("Banana");
fruits.push("Blueberry");
fruits.pop();
console.log("Array Elements:");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
var searchFruit = "strawberry";
var isFruitInArray = fruits.includes(searchFruit);
console.log("Is ".concat(searchFruit, " in the array? ").concat(isFruitInArray ? "Yes" : "No"));
var indexOfruit = fruits.indexOf("Pineapple");
console.log("Index of \"Pineappple\" in the array is: ".concat(indexOfruit));
//Q9.Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var selectedColor = Color.Blue;
console.log("Selected Color:", selectedColor);
//Q10. Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also declare a variable called 'isUndefined' and assign it an undefined value.  
var isNull = null;
var isUndefined = undefined;
console.log(isNull, isUndefined);
