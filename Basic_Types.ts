/**
 * 
 * BASIC BUILDING BLOCKS: STRING, NUMBER, & BOOLEAN TYPES
 * 
 * @String_Notes
 * 1. Almost every piece of code in TS is built on the usage of text, numbers and yes/no.
 * 2. A user's name is a text, a user's age is of number and whether they're logged in is of yes/no
 * 3. These are called primitive types, the basic building blocks.
 * 4. Objects, arrays and everything else in TS is made by combining them.
 * 5. A string is a text denoted in all 3 quote styles -> "", '', ``
 * String also comes in with built in helper methods: .length, .toUpperCase(), .trim(), .includes("x"), .split(",")
 * 
 */


// example 1 - strings and booleans
const firstName: string = "Rohit"
const lastName: string = "Paul"
let personAge: number = 28
let isPersonOfAdultAge: boolean = true || false
let employer: string = 'E2 InfoSystems'
let personEmployer: string =  `Rohit is employed by ${employer}`


/**
 * 
 * @Numbers_and_Boolean_Notes
 * 
 * 1. number type: used for all kinds of numbers like whole numbers, decimals, long numbers etc. Unlike Java which has int, float, double and so on,
 * TS has one type which is number for all numbers, decimals and negatives.
 * 
 * 2. This is also a number: if you use Number('abc') it returns NaN which is not a number. If you use typeof operator for this, it outputs a number
 * Likewise for infinity.
 * 
 * 3. boolean type: if of type which has only 2 values which is true or false
 * Booleans usually come from comparisson or checks
 */


// example 2 - numbers and booleans
let someRandomNumber: number = 2000
someRandomNumber = 47879
console.log(someRandomNumber);

let online = 1
const isAnyoneAlive: boolean = false
const isAnyoneOnline: boolean = online > 0
console.log(isAnyoneOnline);




/** 
 * 
 * ANY VS UNKNOWN
 * 
 * @Notes
 * 1. Most of the time you will know what type a value will be; a name is string, an age is number etc. 
 * So these values you know ahead of time what type they are. But there are some where cant know ahead of time what ype they are:
 * -> Data coming from an API
 * -> The result of JSON.parse() (turning a JSON string to an object)
 * -> An error caught in try/catch
 * -> Values from a library that has no types
 * 
 * 2. TS needs a way to say "I dont know what this is yet" so we have 2 options. Both behave differently: Any & Unknown
 * Any -> turn off checking for this value. Any means accept anything and check nothing. Once a value is of type any, TS 
 * stops protecting you. TS stays silent at compile type and errors out at runtime which exactly is what TS is meant to prevent.
 * 
 * Unknown -> Basically means "I dont know anything yet, first check before using it"
 * Unknown also accepts any value but the only difference is TS wont allow you to use it before cheking it what it actually is
 * 
 */

// Example for any type
let somethingStrange: any = 2143
somethingStrange = "brace me"
somethingStrange = {
    beSoFreakingReal: 2
}
somethingStrange = true
//somethingStrange.toUpperCase() -> this will error out: TypeError: somethingStrange.toUpperCase is not a function since somethingStrange is a boolean variable now
// console.log(somethingStrange);


// Example for unknown type
let yolo: unknown = "hello"
yolo = 100.77
// yolo.toUpperCase() -> this will be erroring out as yolo is of type unknown and TS blocks this line as we need to first check its type before using it at all
console.log(yolo);

// To use it , first check the type
if (typeof yolo === "string"){
    console.log(yolo.toUpperCase());
} else if (typeof yolo === "number"){
    console.log(yolo.toPrecision(3));
}



/**
 * 
 * NEVER TYPE
 * 
 * @Notes_for_Never_Type
 * 1. Never represents values that never occur.
 * 2. Its used in functions that do not return a value because they either throw an error or never finish running
 * 3. Unlike void (which returns undefined), a never type indicates that a value or return never happens at all.
 * 
 */

// example - never type - Functions That Always Throw Errors
// When a function unconditionally throws an exception, it never reaches an endpoint. Hence, TS gives us never type to signal that the execution must stop
// with immediate effect
function error(message: string): never {
    throw new Error(message)
}


// example - never type - Infinite loops
// A function containing an infinite loop without a break or return will never complete.
function infiniteLoop(): never {
    while (true){
        console.log("Server runs...");
    }
}


/**
 * 
 * THE VOID TYPE
 * 
 * @Notes
 * 1. Void is used in functions that we deem to not want to return anything
 * 2. It signifies abssence of return type
 * 3. Void is commonly used for functions that performs actions that dont return a value making our intent clear
 * 4. One thing to note is that when we dont return anything of value, we generally dont have to use console.log(), rather we can just simply call the fn.
 * 
 */

// example of void type usage
const clickAction = (clicking: string):void  => {
    console.log(`I have clicked on this: ${clicking}`);
}

clickAction("submit button")



/**
 * 
 * TUPLES
 * 
 * 
 * @Notes
 * 1. Tuples are a special type that are exclusive only to TS and they dont exist in JS
 * 2. Tuples are an array types of fixed length, ordered with fixed set of types
 * 3. In TS, tuples dont actually prevent us from pushing on extra elements after creating  
 */

// example for tuple 
const sampleTuple: [number, number, number] = [255, 0, 222] // --> this is valid
// const sampleTuple2: [number, string, boolean] = ["dsf", 1, false] // --> this will error out because the order of the tuple is incorrect


// advanced example for tuples
// Reassignment of different order in value is not possible
//fruitsAndTheirPriceResponse[0] = 2092 // --> Type 'number' is not assignable to type 'string'
type fruitsHTTPResponse = [string, number]
const fruitsAndTheirPriceResponse: fruitsHTTPResponse = ["Apple", 20] // --> see how it follows the order. But if you change the order in values..
// const fruitsAndTheirPriceResponse2: fruitsHTTPResponse = [2033.2, "banana"] // --> this will error out saying Type 'number' is not assignable to type 'string'


// In TS, tuples dont actually prevent us from pushing on extra elements after creating . It doesnt complain if i push an extra number
// This has to do with how tuples had been implemented behind the scenes.. so its a limitation
fruitsAndTheirPriceResponse.push(2020)
fruitsAndTheirPriceResponse.push(2323)
fruitsAndTheirPriceResponse.push("2020")
fruitsAndTheirPriceResponse.pop()
fruitsAndTheirPriceResponse.pop()
fruitsAndTheirPriceResponse.pop()
fruitsAndTheirPriceResponse.pop()
console.log(fruitsAndTheirPriceResponse);


// We can also make an array of tuples
const fruitBasketArrayOfTuples: fruitsHTTPResponse[] = [["apple", 2], ["banana", 8], ["orange", 5]]
console.log(fruitBasketArrayOfTuples);



/**
 * 
 * ENUMS
 * 
 * @notes
 * 1. Enums allows us to define a set of named constants or options
 * 2. We can give these constants numeric or string values
 * 
 */

// example - usage of enums
enum activityStatus {
    ONLINE, // value 0
    OFFLINE, // value 1
    BUSY, // value 2
    AWAY, // value 3
    OUT_OF_OFFICE // value 4
}

const myStatus: activityStatus = activityStatus.ONLINE

function isBusy(status: activityStatus){
    return status === activityStatus.BUSY
}

console.log(isBusy(activityStatus.OFFLINE));


// example - usage of enums - assigning user defined values
// A string enum: each option is given its own text value (WIN = "Win").
// Left side = name used in code (gameResults.WIN), right side = actual stored value ("Win").
// Why assign values: readable in logs/reports ("Win" instead of 0), values don't shift
// if options are added or reordered, and they match text coming from APIs/databases.
enum gameResults {
    WIN = "Win",
    LOSS = "Loss",
    DRAW = "Draw"
}

// usage of above enum in a function
const lotteryResults = (gameResult: gameResults):void => {
    console.log(`Today's lottery result is a ${gameResult}`);
}

lotteryResults(gameResults.WIN)

// another example
const anotherLottery = (result: gameResults): void => {
    if (result === gameResults.WIN) {
        console.log(`Congratulations you have won the lottery!`);
    } else if (result === gameResults.DRAW) {
        console.log(`Unfortunately, you drew with another person!`);
    } else {
        console.log(`Unfortunately, you've lost the lottery.`);
    }
}

anotherLottery(gameResults.WIN)
anotherLottery(gameResults.LOSS)
anotherLottery(gameResults.DRAW)



/** 
 * 
 * LITERAL TYPES
 * 
 * @Notes
 * 1. Literal types are types that allow one exact value instead of a whole category
 * 2. A single literal on its own isn’t very useful. The power comes from combining literals with | (“or”), which is called a union 
 * 3. Use them any time something has a small, fixed set of choices: environments, user roles, HTTP methods. 
 * They do the same job as an enum but with less code, which is why many teams prefer them.
 * 
 * 4. let vs const - let allows to assign and reassign values but const keeps the exact value as its type
 * 
 */


// example 1 - string literal type
type Direction = "Left" | "Right" | "Up" | "Down"

function gettingDirections (direction: Direction) {
    // console.log(object);
}

gettingDirections("Left") // ✅
// gettingDirections("ewfsef") // ❌




/**
 * 
 * UNION TYPES
 * 
 * @Notes
 * 1. What they are: Sometimes a value can be legitimately be more than 1 type. An ID might be a number 123 or a string "A-133" and a value might be missing or null
 * 2. A union type says "this can be this or that" using | symbol 
 * 3. TS allows any of the listed types and still rejects everything else. 
 * 
 */

// example 
let id: string | number
id = 10
id = "A10"
// id = true --> this erors out because boolean isnt in the union. Type 'boolean' is not assignable to type 'string | number'


// Using a union value: check first. Because the value could be either type. Typescript wont allow you to call .toUpperCase() for constant or variable
// with string | number union type because a number doesnt have that method. So first you check which type it is with typeof operator and inside
// each branch, based on the data that is passed in arguments, TS will know its type in each branch. This is called type narrowing.

const printSomething = (id: string | number) => {
    if (typeof id === "string"){
        console.log(id.toUpperCase());
    } else {
        console.log(id.toPrecision(2));
    }
}

printSomething(98.99)
printSomething("oh how gold and silver are useless now!")



/**
 * 
 * INTERSECTION TYPES
 * 
 * @Notes
 * 1. An intersection type combines smaller types into one using the & symbol
 * 2. For example a person type and an employee type can be combined into one staff type
 * 3. Union vs intersection: Simply put, an intersection uses '&' symbol meaning 'AND' that requires all of the values strictly.
 * and an union uses '|' meaning 'OR' that requires either of the values.
 * 
 */

// example
type Person = {
    fullName: string,
    personAge: number,
    personNationality: string
}

type Employee = {
    employeeId: number | string,
    employeeCompanyName: string,
    employeeTitle: string,
    employeeSalary: number,
    employeeLocation: string
}

type Staff = Person & Employee

const rohit: Staff = {
    fullName: "Rohit Paul",
    personAge: 28,
    personNationality: "Indian",
    employeeId: "RP03937",
    employeeCompanyName: "Amazon",
    employeeTitle: "Software Engineer I",
    employeeSalary: 2400000,
    employeeLocation: "Bengaluru"
}

console.log(rohit);



/**
 * 
 * REST PARAMETERS
 * 
 * @Notes
 * 1. Sometimes you dont know how many arguments you may pass to a function
 * 2. It could be 5 or 10 or 20. So rest parameters denoted by "..." before the name collects the remaining arguments to a single array
 * 3. You write it with 3 dots ... before the name and its type is an array type like number[]
 * 
 */

// basic example
const sum = (...nums: number[]):number => {
    let totalNo = 0
    for (const n of nums){
        totalNo += n
    }
    return totalNo
}

console.log(sum(1,2,3,4,5,100));


// another example
function printSomeNames(greeting: string, ...names: string[]) {
    names.forEach((name) => {
        console.log(`${greeting}, ${name}`);
    });
}

printSomeNames("Hey", "Jack", "Locke", "Sawyer", "Kate")


/**
 * 
 * FOR EACH METHOD
 * 
 * @NOTES
 * 1. This is an array method that returns a function once for every item in the array
 * 2. We give it a callback inside and it hands each item to that call back, one at a time
 * 
 */


// basic example
const someNames = ["Rohit", "Michael", "Locke", "Jack", "Ricardos"]
someNames.forEach((name) => {
    console.log(`Hello, ${name}`);
})

someNames.forEach((name1, index) => {
    console.log(`${index + 1}. ${name1}`);
})



/**
 * 
 * FUNCTION TYPE ALIASES
 * 
 * @Notes
 * 1. A function type alias gives a name to a shape of a function, meaning what it takes in and what it gives back. Its only a description, not a function    
 * 2. It has no nody and can't be run, adn disappears after compiling.
 * 
 */

// example 1
type mathOperation = (x: number, y:number) => number

const add: mathOperation = (x, y) => x + y
console.log(add(10101, 1010));

const multiply: mathOperation = (x, y) => x * y
console.log(multiply(2424,2424));


// example 2 - calling a function inside the parameter of another function
function totalCalc(a: number, b: number, operation: mathOperation): number {
    return operation(a, b)
}

console.log(totalCalc(12, 12, add)); 