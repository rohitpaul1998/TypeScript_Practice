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
var firstName = "Rohit";
var lastName = "Paul";
var personAge = 28;
var isPersonOfAdultAge = true || false;
var employer = 'E2 InfoSystems';
var personEmployer = "Rohit is employed by ".concat(employer);
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
var someRandomNumber = 2000;
someRandomNumber = 47879;
console.log(someRandomNumber);
var online = 1;
var isAnyoneAlive = false;
var isAnyoneOnline = online > 0;
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
var somethingStrange = 2143;
somethingStrange = "brace me";
somethingStrange = {
    beSoFreakingReal: 2
};
somethingStrange = true;
//somethingStrange.toUpperCase() -> this will error out: TypeError: somethingStrange.toUpperCase is not a function since somethingStrange is a boolean variable now
// console.log(somethingStrange);
// Example for unknown type
var yolo = "hello";
yolo = 100.77;
// yolo.toUpperCase() -> this will be erroring out as yolo is of type unknown and TS blocks this line as we need to first check its type before using it at all
console.log(yolo);
// To use it , first check the type
if (typeof yolo === "string") {
    console.log(yolo.toUpperCase());
}
else if (typeof yolo === "number") {
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
function error(message) {
    throw new Error(message);
}
// example - never type - Infinite loops
// A function containing an infinite loop without a break or return will never complete.
function infiniteLoop() {
    while (true) {
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
var clickAction = function (clicking) {
    console.log("I have clicked on this: ".concat(clicking));
};
clickAction("submit button");
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
var sampleTuple = [255, 0, 222]; // --> this is valid
var fruitsAndTheirPriceResponse = ["Apple", 20]; // --> see how it follows the order. But if you change the order in values..
// const fruitsAndTheirPriceResponse2: fruitsHTTPResponse = [2033.2, "banana"] // --> this will error out saying Type 'number' is not assignable to type 'string'
// In TS, tuples dont actually prevent us from pushing on extra elements after creating . It doesnt complain if i push an extra number
// This has to do with how tuples had been implemented behind the scenes.. so its a limitation
fruitsAndTheirPriceResponse.push(2020);
fruitsAndTheirPriceResponse.push(2323);
fruitsAndTheirPriceResponse.push("2020");
fruitsAndTheirPriceResponse.pop();
fruitsAndTheirPriceResponse.pop();
fruitsAndTheirPriceResponse.pop();
fruitsAndTheirPriceResponse.pop();
console.log(fruitsAndTheirPriceResponse);
// We can also make an array of tuples
var fruitBasketArrayOfTuples = [["apple", 2], ["banana", 8], ["orange", 5]];
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
var activityStatus;
(function (activityStatus) {
    activityStatus[activityStatus["ONLINE"] = 0] = "ONLINE";
    activityStatus[activityStatus["OFFLINE"] = 1] = "OFFLINE";
    activityStatus[activityStatus["BUSY"] = 2] = "BUSY";
    activityStatus[activityStatus["AWAY"] = 3] = "AWAY";
    activityStatus[activityStatus["OUT_OF_OFFICE"] = 4] = "OUT_OF_OFFICE"; // value 4
})(activityStatus || (activityStatus = {}));
var myStatus = activityStatus.ONLINE;
function isBusy(status) {
    return status === activityStatus.BUSY;
}
console.log(isBusy(activityStatus.OFFLINE));
// example - usage of enums - assigning user defined values
// A string enum: each option is given its own text value (WIN = "Win").
// Left side = name used in code (gameResults.WIN), right side = actual stored value ("Win").
// Why assign values: readable in logs/reports ("Win" instead of 0), values don't shift
// if options are added or reordered, and they match text coming from APIs/databases.
var gameResults;
(function (gameResults) {
    gameResults["WIN"] = "Win";
    gameResults["LOSS"] = "Loss";
    gameResults["DRAW"] = "Draw";
})(gameResults || (gameResults = {}));
// usage of above enum in a function
var lotteryResults = function (gameResult) {
    console.log("Today's lottery result is a ".concat(gameResult));
};
lotteryResults(gameResults.WIN);
// another example
var anotherLottery = function (result) {
    if (result === gameResults.WIN) {
        console.log("Congratulations you have won the lottery!");
    }
    else if (result === gameResults.DRAW) {
        console.log("Unfortunately, you drew with another person!");
    }
    else {
        console.log("Unfortunately, you've lost the lottery.");
    }
};
anotherLottery(gameResults.WIN);
anotherLottery(gameResults.LOSS);
anotherLottery(gameResults.DRAW);
function gettingDirections(direction) {
    // console.log(object);
}
gettingDirections("Left"); // ✅
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
var id;
id = 10;
id = "A10";
// id = true --> this erors out because boolean isnt in the union. Type 'boolean' is not assignable to type 'string | number'
// Using a union value: check first. Because the value could be either type. Typescript wont allow you to call .toUpperCase() for constant or variable
// with string | number union type because a number doesnt have that method. So first you check which type it is with typeof operator and inside
// each branch, based on the data that is passed in arguments, TS will know its type in each branch. This is called type narrowing.
var printSomething = function (id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toPrecision(2));
    }
};
printSomething(98.99);
printSomething("oh how gold and silver are useless now!");
var rohit = {
    fullName: "Rohit Paul",
    personAge: 28,
    personNationality: "Indian",
    employeeId: "RP03937",
    employeeCompanyName: "Amazon",
    employeeTitle: "Software Engineer I",
    employeeSalary: 2400000,
    employeeLocation: "Bengaluru"
};
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
var sum = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var totalNo = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var n = nums_1[_a];
        totalNo += n;
    }
    return totalNo;
};
console.log(sum(1, 2, 3, 4, 5, 100));
// another example
function printSomeNames(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    names.forEach(function (name) {
        console.log("".concat(greeting, ", ").concat(name));
    });
}
printSomeNames("Hey", "Jack", "Locke", "Sawyer", "Kate");
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
var someNames = ["Rohit", "Michael", "Locke", "Jack", "Ricardos"];
someNames.forEach(function (name) {
    console.log("Hello, ".concat(name));
});
someNames.forEach(function (name1, index) {
    console.log("".concat(index + 1, ". ").concat(name1));
});
var add = function (x, y) { return x + y; };
console.log(add(10101, 1010));
var multiply = function (x, y) { return x * y; };
console.log(multiply(2424, 2424));
// example 2 - calling a function inside the parameter of another function
function totalCalc(a, b, operation) {
    return operation(a, b);
}
console.log(totalCalc(12, 12, add));
