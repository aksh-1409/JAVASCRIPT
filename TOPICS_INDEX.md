# JavaScript Learning Topics Index

A comprehensive reference guide for all JavaScript topics covered in this directory.

---

## **Basics & Getting Started**

### **1.js** - Hello World
- First JavaScript program
- Using `console.log()`

### **2.js** - Variables & Comments
- Variable declaration and reassignment
- Comments in JavaScript

### **3.js** - Variable Naming Rules
- Rules for naming variables

---

## **Variables & Data Types**

### **4.js** - Let Keyword
- `let` keyword
- Cannot redeclare variables with `let`

### **5.js** - Const Keyword
- `const` keyword for constants
- Cannot reassign const variables
- Operations on const values

### **8.js** - Data Types & typeof Operator
- Primitive data types (string, number, boolean, undefined, null, symbol, BigInt)
- `typeof` operator
- Type conversion (string to number, number to string)

### **11.js** - Undefined, Null & BigInt
- `undefined` vs `null`
- typeof null bug
- BigInt for large numbers
- BigInt operations

---

## **Strings**

### **6.js** - String Indexing
- Accessing string characters by index
- String length property

### **7.js** - String Methods
- String immutability
- `trim()`, `toLowerCase()`, `toUpperCase()`
- `slice()` method

### **9.js** - String Concatenation
- Concatenating strings

### **10.js** - Template Strings
- Template literals with backticks
- String interpolation with `${}`

---

## **Operators & Conditionals**

### **12.js** - Booleans & Comparison Operators
- Boolean values (true/false)
- Comparison operators (`>`, `<`, `==`, `===`, `!=`, `!==`)
- Difference between `==` and `===`

### **13.js** - Falsy Values
- Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- Truthy values

### **14.js** - If-Else Condition
- Basic if-else statements

### **15.js** - Ternary Operator
- Conditional (ternary) operator syntax

### **16.js** - AND & OR Operators
- Logical operators

### **17.js** - Nested If-Else
- Nested conditional statements
- Number guessing example

### **18.js** - Else If
- Else-if ladder

### **19.js** - Switch Case Statement
- Switch-case syntax

---

## **Loops**

### **20.js** - While Loop
- While loop syntax

### **21.js** - While Loop Example
- Practical while loop examples

### **22.js** - For Loop
- For loop syntax
- Difference between `let` and `var` in loops (scope)

### **24.js** - Break & Continue Keywords
- `break` statement
- `continue` statement

### **25.js** - Do-While Loop
- Do-while loop syntax

---

## **Arrays**

### **26.js** - Introduction to Arrays
- Creating arrays
- Array as reference type
- `Array.isArray()` method
- Accessing array elements
- Array mutability

### **27.js** - Array Push, Pop, Shift & Unshift
- `push()` - add to end
- `pop()` - remove from end
- `unshift()` - add to start
- `shift()` - remove from start

### **28.js** - Primitive vs Reference Types
- Difference between primitive and reference types
- How arrays are stored in memory

### **29.js** - Clone & Concatenate Arrays
- Cloning arrays using `concat()`, `slice()`, and spread operator
- Concatenating arrays
- Array equality (`===` checks reference)

### **30.js** - For Loop in Arrays
- Iterating arrays with for loop
- Array manipulation example

### **31.js** - Using Const for Arrays
- Why use `const` for arrays
- Array mutation with const

### **32.js** - For-In & For-Of Loops
- `for...in` loop (iterates over indices)
- `for...of` loop (iterates over values)

### **33.js** - Array Destructuring
- Destructuring assignment for arrays

### **46.js** - forEach() Method
- `forEach()` array method
- Callback functions with forEach

### **47.js** - Sort Method
- `sort()` method for arrays
- Sorting strings vs numbers
- Custom sort with compare function
- Ascending and descending order

---

## **Objects**

### **34.js** - Introduction to Objects
- Creating objects
- Accessing object properties (dot notation & bracket notation)
- Adding new properties
- Dynamic property names

### **35.js** - Looping Through Objects
- `for...in` loop for objects
- `Object.keys()` method
- Getting all keys from an object

### **36.js** - Computed Properties
- Using variables as object keys
- Computed property names

### **37.js** - Object Destructuring
- Destructuring assignment for objects
- Rest operator with objects

### **50.js** - Clone Objects
- Cloning objects using `Object.assign()`
- Cloning with spread operator

### **51.js** - Optional Chaining
- Optional chaining operator (`?.`)
- Safely accessing nested object properties
- Avoiding errors with undefined properties

---

## **Functions**

### **38.js** - Arrow Functions
- Arrow function syntax
- Single-line vs multi-line arrow functions
- Implicit return

### **39.js** - Lexical Scope
- Lexical scoping in JavaScript
- Nested functions and variable access

### **40.js** - Block Scope vs Function Scope
- `let` and `const` are block-scoped
- `var` is function-scoped
- Scope differences

### **41.js** - Default Parameters
- Default function parameters
- Before and after ES6 syntax

### **42.js** - Rest Parameters
- Rest parameters (`...`)
- Collecting remaining arguments as array

### **43.js** - Parameter Destructuring
- Destructuring objects in function parameters
- Cleaner function signatures

### **44.js** - Callback Functions
- Callback function concept
- Passing functions as arguments

### **45.js** - Function Returning Function
- Higher-order functions
- Functions that return other functions

---

## **Advanced Data Structures**

### **48.js** - Iterables & Array-Like Objects
- What are iterables (arrays, strings)
- `for...of` loop on iterables
- Array-like objects (have length property and index access)
- Objects are not iterables

### **49.js** - Set Data Structure
- Creating Sets
- Set properties (unique items, no index-based access)
- Set methods: `add()`, `has()`, `delete()`, `size`
- Iterating over Sets
- Sets are iterable

---

## **this Keyword & Context**

### **53.js** - this Keyword & use strict
- `this` keyword in global context (window object)
- `"use strict"` mode
- Preventing global object access

### **54.js** - call, apply & bind Methods
- Sharing methods between objects
- `call()` method with arguments
- `apply()` method (arguments as array)
- `bind()` method
- Binding context to functions

### **55.js** - Arrow Functions & this
- Arrow functions don't bind `this`
- `this` in arrow functions (takes from parent scope)
- call, apply, bind with arrow functions

### **56.js** - Object Method Shorthand
- Shorthand method syntax in objects
- `this` binding in shorthand methods

---

## **Object-Oriented Programming**

### **57.js** - Factory Functions
- Creating objects with factory functions
- Function returning objects
- Creating multiple similar objects

### **58.js** - Optimizing Factory Functions
- Extracting common methods
- Creating separate method objects
- Reducing code duplication

### **59.js** - Factory Function Problems
- Issues with adding new methods
- Need for better solution (prototype chain)

### **60.js** - Object.create() & Prototype Chain
- `Object.create()` method
- `__proto__` property
- Prototype chain explained
- How property lookup works

### **61.js** - Factory Functions with Prototypes
- Using `Object.create()` with factory functions
- Setting up prototype chain manually

### **62.js** - Function Prototype Property
- Functions as objects
- `prototype` property of functions
- Adding properties to function prototype
- Difference between objects and functions

### **63.js** - Using Function Prototype
- Adding methods to function prototype
- Using `createUser.prototype`
- Prototype-based method sharing

### **64.js** - new Keyword
- How `new` keyword works
- Creates empty object
- Sets `__proto__` property
- Returns the object

### **65.js** - Constructor Functions
- Constructor function pattern
- Using `new` with constructor functions
- Adding methods to prototype

### **66.js** - hasOwnProperty Method
- Iterating over object properties
- `hasOwnProperty()` method
- Filtering out prototype properties

### **67.js** - Array Constructor & Prototype
- Array constructor with `new`
- Array literals vs constructor
- Array prototype chain

---

## **ES6 Classes**

### **68.js** - Class Keyword
- ES6 class syntax
- `constructor` method
- Class methods
- Classes are syntactic sugar
- Creating instances with `new`
- Checking prototype

### **69.js** - Class Inheritance (Introduction)
- Code duplication problem
- Need for inheritance

### **70.js** - extends Keyword
- `extends` keyword for inheritance
- Inheriting from parent class

### **71.js** - super Keyword
- `super()` in constructor
- Calling parent constructor
- Adding child-specific properties
- Child-specific methods

### **72.js** - Method Overriding
- Overriding parent methods in child class
- Method resolution in inheritance

### **73.js** - Getters & Setters
- `get` keyword for getters
- `set` keyword for setters
- Computed properties with getters/setters

### **74.js** - Static Methods & Properties
- `static` keyword
- Static methods
- Static properties
- Accessing static members

---

## **DOM Manipulation**

### **75.js** - textContent vs innerText
- `textContent` property
- `innerText` property
- Difference with hidden elements (display: none)

### **76.js** - Selecting Elements & Collections
- `getElementsByClassName()` - returns HTMLCollection
- `querySelectorAll()` - returns NodeList
- Array-like objects
- Looping through collections
- Converting to array with `Array.from()`

### **77.js** - classList Property
- `classList` property (DOMTokenList)
- `add()`, `remove()`, `contains()` methods
- `toggle()` method

### **78.js** - innerHTML Property
- `innerHTML` property
- Updating HTML content
- Performance issues with repeated updates
- When to use innerHTML

### **79.js** - prepend & append Methods
- `prepend()` - add at start
- `append()` - add at end

### **80.js** - before & after Methods
- `before()` method
- `after()` method
- Inserting elements relative to existing ones

### **81.js** - Static vs Live Lists
- NodeList (static list) from `querySelectorAll()`
- HTMLCollection (live list) from `getElementsByClassName()`
- Difference in behavior when DOM changes

### **83.js** - Element Dimensions
- `getBoundingClientRect()` method
- Getting element dimensions (height, width)
- Element position information

---

## **Events**

### **84.js** - Event Object
- How browser creates event objects
- Event handler functions
- Event object passed as argument

### **85.js** - Keyboard & Mouse Events
- `keypress` event
- `mouseover` event
- `mouseleave` event
- Event listeners on body and elements

### **86.js** - Event Capturing & Bubbling
- Event capture phase (top-down)
- Event bubbling phase (bottom-up)
- Third argument in `addEventListener()` for capture

---

## **Asynchronous JavaScript**

### **87.js** - setTimeout & clearTimeout
- `setTimeout()` function
- Asynchronous programming concept
- Non-blocking code execution
- `clearTimeout()` to cancel timeout
- Callback queue and call stack

### **88.js** - setInterval & clearInterval
- `setInterval()` function
- Repeating function calls
- `clearInterval()` to stop interval

### **90.js** - Callback Hell
- Nested callbacks
- Pyramid of doom
- Readability issues

### **91.js** - Callback Hell with Error Handling
- Callbacks with success and failure handlers
- Complex nested structure

### **92.js** - Promises
- `Promise` constructor
- `resolve` and `reject`
- `.then()` method
- `.catch()` method
- Microtask queue
- Promise priority over setTimeout

### **93.js** - Promises to Solve Callback Hell
- Refactoring callback hell with promises
- Promise chaining
- Cleaner asynchronous code

### **94.js** - Fetch API
- `fetch()` function
- Making HTTP requests
- Handling response
- `.json()` method
- Error handling with fetch

### **95.js** - async/await
- `async` keyword
- `await` keyword
- Asynchronous programming with async/await
- Error handling with try-catch
- Cleaner syntax than promises

---

## **ES6 Modules**

### **96.js** - ES6 Module Imports
- `import` statement
- Named imports with `{}`
- Importing with alias (`as` keyword)
- Default imports (without `{}`)
- Multiple imports from same file

### **97.js** - Named Exports
- `export` keyword
- Named exports
- Exporting variables

### **98.js** - Simple Named Export
- Inline export syntax

### **99.js** - Exporting Classes
- Exporting classes with named export

### **100.js** - Default Export
- `export default` syntax
- Default export for classes

### **101.js** - Single Default Export Rule
- Only one default export per file
- Default export limitations

### **102.js** - Mixing Default & Named Exports
- Combining default and named exports
- Importing both types together

---

## **Empty/Placeholder Files**

### **23.js** - Empty file

### **52.js** - Empty file

### **82.js** - Empty file

### **89.js** - Empty file

---

## Quick Reference by Category

**Variables:** 2, 3, 4, 5  
**Data Types:** 8, 11  
**Strings:** 6, 7, 9, 10  
**Operators & Conditionals:** 12, 13, 14, 15, 16, 17, 18, 19  
**Loops:** 20, 21, 22, 24, 25, 30, 32  
**Arrays:** 26, 27, 28, 29, 30, 31, 32, 33, 46, 47  
**Objects:** 34, 35, 36, 37, 50, 51  
**Functions:** 38, 39, 40, 41, 42, 43, 44, 45  
**Advanced:** 48, 49  
**this & Context:** 53, 54, 55, 56  
**OOP (Object-Oriented):** 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67  
**ES6 Classes:** 68, 69, 70, 71, 72, 73, 74  
**DOM Manipulation:** 75, 76, 77, 78, 79, 80, 81, 83  
**Events:** 84, 85, 86  
**Asynchronous JS:** 87, 88, 90, 91, 92, 93, 94, 95  
**ES6 Modules:** 96, 97, 98, 99, 100, 101, 102  

---

**Total Files:** 102  
**Last Updated:** November 5, 2025
