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
