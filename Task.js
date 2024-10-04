"use strict";
// 100 Days Of Coding Challenge!
/* Day-68 Task:
Learn about TypeScript tuples by using the following guide and coding along with the examples provided in it:

Tuple Data Type in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-68/TS-Tuple/README.md */
//------------------------------------------------------------------------------------------------------------------
/* What are Tuples?

Tuples in TypeScript are a special type of array where the type of each element is known and fixed.
This means you can define a tuple to have a specific number of elements, each with a specific type.*/
// Example:
let myTuple;
myTuple = ["Hello", 42]; // Correct
// myTuple = [42, "Hello"]; // Error: Type 'number' is not assignable to type 'string'
//------------------------------------------------------------------------------------------------------------------
/* Key Features of Tuples

1. Fixed Length: The number of elements in a tuple is fixed.
2. Known Types: The types of elements are known and must be in the specified order.*/
// Examples
// A. Basic Tuple:
let person;
person = ["Alice", 30]; // Correct
// person = [30, "Alice"]; // Error
// B. Optional Elements: Since TypeScript 3.0, tuples can have optional elements:
let bgColor;
bgColor = [0, 255, 255, 0.5]; // Correct
bgColor = [0, 255, 255]; // Also correct
let color = [255, 0, 0];
//-------------------------------------------------------------------------------------------------------------------
// Use Cases
// Function Parameters: Tuples can be used to define the types of parameters in a function.
function displayPerson(person) {
    console.log(`Name: ${person[0]}, Age: ${person[1]}`);
}
displayPerson(["Bob", 25]);
// Returning Multiple Values: Tuples can be used to return multiple values from a function.
function getCoordinates() {
    return [50.123, 10.456];
}
let coords = getCoordinates();
console.log(`Latitude: ${coords[0]}, Longitude: ${coords[1]}`);
// Best Practices
// Use tuples when you need to represent a fixed structure with known types.
// Avoid using tuples for complex data structures; use interfaces or classes instead.
