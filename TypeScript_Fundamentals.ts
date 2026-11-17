/**
 * WHAT IS TYPESCRIPT?
 *
 * @Notes
 * 1. A superset of JavaScript: all valid JS is valid TS; TS adds optional static types on top.
 * 2. Open source, developed by Microsoft.
 * 3. Statically typed: types are checked at compile time (JS is dynamically typed, checked at runtime).
 * 4. Types can be written explicitly (annotations) or worked out automatically (inference).
 * 5. TS doesn't run directly: tsc compiles it to plain JS, and the types are removed.
 * 6. Benefit: catches bugs before runtime, better editor tooling, safer refactoring on large codebases.
 */


/**
 * 
 * ALL I NEED TO KNOW ABOUT TSCONFIG.JSON FILE
 * 
 * @Notes
 * 1. Computers and browsers dont understand TS. Node.js and browsers like chrome understand only JavaScript
 * So when you write TS code like this -> const variable:string = "hello" node looks at the :string and has no idea what it means. It cant run that.
 * 
 * 2. So a typescript compiler "tsc" converts all TS code to javascript.
 * tsc is a tool or program that does two jobs: 1. to look at your TS code for errors at compile time and 2. translates your TS code to JS code
 * 
 * 3. So why do we need tsconfig.json?
 * tsc has a lot of settings: how strict to be when proofreading, where to save the translated files, which version of JS to write and so on.
 * If tsc is the translator, tsconfig.json is the note you hand them: "Be very strict about mistakes. Save the translated letters in the dist
 * folder. Use modern english"
 * 
 */



/**
 * 
 * TYPE ANNOTATIONS
 * 
 * @Notes
 * 1. Type Annotations: you tell TypeScript the type
 * 2. An annotation is a label your write after a variable or parameter name with a colon ":"
 * 3. Once you've labelled it, Typescript stops allowing you to assign other values that is not of that type.
 * 
 */

// example 
let age: number = 28
// age = "twenty eight" --> this will error: Type 'string' is not assignable to type 'number'
const fullName: string = "Rohit Paul"
let isRohitLearningOrNot: boolean = true
const basketOfFruits: string[] = ["Apple", "Mango", "Banana", "Papaya"]
const listOfThings: [string, number] = ["Airplanes", 2000]
let sampleObj: {
    name: string,
    age: number
}



/**
 * 
 * TYPE INFERENCE
 * 
 * @Notes
 * 1. Typescript works out the type itself. Meaning, if you assign a value to a variable without strictly annotating its type, TS will
 * infer its type based on the value you assign it. This is called Type Inference.
 * 
 * 2. An inferred type is just as strict as you wrote yourself.
 * 3. When do we need to annotate?
 * -> If there's a value given immediately, we don't need annotation.
 * -> If a variable is declared but is not initialized, then TS won't know what type it is if the value is not given. Eg: let fruit;
 * -> When it also comes to an array, i.e, an empty array, TS can't infer if there are no values given. Eg: const ages = []
 * -> Let TS infer when value makes the type obvious. Annotate when TS has nothing to infer from or to go on and also on function parameters. 
 */

// example 1 - how type inference works
let fruit = "apple" // hover on fruit and you'll fine --> let fruit: string
let obj = {
    id: 23424,
    name: "rohit"
}  // hover on obj and you'll find --> let obj: {id: number; name: string;}
// it infers the type of the variables based on its value assignment



/**
 * STRICT MODE
 *
 * @Notes
 * 1. "strict": true is a compiler option in tsconfig.json.
 * 2. It turns on a group of strict checks. The two most important:
 *    noImplicitAny and strictNullChecks.
 *
 * 3. noImplicitAny: when OFF, if TS can't work out a type (most often a function
 *    parameter with no annotation), it quietly uses 'any' = accept anything, check nothing.
 *    When ON, TS gives an error, so we must annotate the type ourselves.
 *
 * 4. strictNullChecks: a value can be missing (null / undefined). Using it anyway crashes:
 *    "Cannot read properties of undefined".
 *    OFF: TS assumes nothing is ever missing, so the code compiles and crashes at runtime.
 *    ON:  TS knows when a value MIGHT be missing and blocks using it until we check it,
 *         so the bug is caught at compile time instead.
 *         'string' then means only a string; a value that can be missing is 'string | null'.
 *    Handle it with: if (value) {...}, optional chaining ?. , or a default with ??
 */