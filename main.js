
console.log('Hello world') //print output
let name = "raisa"
name= "anika"
console.log (name)

const age="25" //const cannot be modified or reassigned
console.log (age)

//var allows value reassignment and makes a variable global
var country = "Bangladesh"
country = "Canada"
console.log(country)

//Matematical Operation
let a = 4
let b = 5

console.log(a*b) //multiplication
console.log(a+b) //addition
console.log(b/a) //divisiom
console.log(a%b) //remainder
console.log(b**a) //exponential
console.log(b-a) //subtraction

//String concatanation
console.log(name+b)
console.log(name+" "+country)

//loops
let x = 5, y = 1

//while loop
while (x<10){
console.log (x+y)
x++
}

x = 2
//dowhile loop
do{
    x++
    console.log(x)
}while(x<12)

//for loop
for(let i=0;i<10;i++){
    console.log(i)
}

//Alert, Confirm & Prompt in JavaScript

//POP up ALERT
alert("This is a ALert")

//Option Alert
let result = confirm ("Do you want to leave this ssite?")
console.log(result) 
//NOTE: if we click on cancel it resturns false as value of result if we click on ok it returns true as value of result

//Prompt is used for input from User
let ans = prompt('How are you today')
console.log(ans)
console.log(name+" is "+ans)

//If and Else
//let age = 25 //not cannot reassign or modify since it is defined as constant before

if (age < 18){
    console.log("you are not eligible to vote")
}
else{
    console.log("you may vote")
}

//Switch .. Case
//after every case break statement to let switch block know when to terminate the case

let grade=prompt("What is your grade?")
let comment

switch (grade){
    case 'A+': comment="Outstanding"
    break;
    case 'A': comment="very Good";
    break;
    case 'B': comment="Satisfactory"
    break;
    default: comment="Needs Improvement" 
    //default is for any other cases apart from the options (A, B etc.) stated
}
console.log(comment)

//Arrays: Declaration in two ways

//Method1: using funtion new Array()

//printing an empty array
let arr1 = new Array()
console.log(arr1)
//the length is shown as 0

//Method2: 

//printing an empty array
let arr = []
console.log(arr)
//the length is shown as 0


//Adding elements/values to array...using push
let arr2 = new Array()
    arr2.push(1)
    arr2.push("hello")
    arr2.push("temp")
console.log(arr2) //shows the values within [] and length of arr2 as 3
//Note array can keep different types of variables

//Adding Array elements using Splice

var persons = ["Harry", "Clark", "John"];
    
    // Insert an item at 1st index position
    persons.splice(1, 0, "Alice");
    console.log(persons); // Prints: ["Harry", "Alice", "Clark", "John"]
    
    // Insert multiple elements at 3rd index position
    persons.splice(3, 0, "Ethan", "Peter");
    console.log(persons); // Prints: ["Harry", "Alice", "Clark", "Ethan", "Peter", "John"]

//Deleting last element from array... using push
let arr3 = new Array()
    arr3.push(1)
    arr3.push("hello")
    arr3.push("temp")
    //command to remove the last element
    arr3.pop()
console.log(arr3)

//Printing array with values
let colors = ['purple', 'red','yellow','green']
console.log(colors)

//Printing a specific array index
console.log(colors[0])

//Printing only unique values from a array with repeatition of values
//we will use the set function
let num=[1,2,4,3,5,6,3,3,4,5,7,0,1,0,3,5,6]
let unique_num=new Set(num)

console.log(unique_num)

//Other ways to remove array values: https://love2dev.com/blog/javascript-remove-from-array/
//Removing first value in the array...using shift
var ar = ['zero', 'one', 'two', 'three']
ar.shift(); 
// returns "zero"
console.log( ar ); 
// ["one", "two", "three"]

//Removing certain no. of values from a specific index...using splice
var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr4.splice(2,2);
console.log(arr4)

let list=["bar", "baz", "foo", "qux"]
console.log(list.splice(0, 2))
console.log(list)
// Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"]

//Removing Array Items By Value Using Splice
var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
for( var i = 0; i < arr.length; i++){ 
    if ( arr5[i] === 5) {  //initially identifying index
        arr5.splice(i, 1); //removing value at that index
        i--} //decrementing the index value so other matches are not ignored.
    }
    console.log(arr5) //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]

//Removing Array Items By Value Using Filter
    //It creates a new array.It does not mutate the array on which it is called, but returns a new array.
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var filtered = array.filter(function(value, index, arr){ return value > 5;});
    //filtered => [6, 7, 8, 9]
    //array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


//Removing Array Items By Value Using Delete
    //delete operator does not affect the length property nor the index of subsequent elements... 
    //deleted item becomes undefined
    var ar = [1, 2, 3, 4, 5, 6];
    delete ar[4]; // delete element with index 4
    console.log( ar ); 
    // [1, 2, 3, 4, undefined, 6]
    alert( ar ); 
    // 1,2,3,4,,6

//Funtions: Declaration n call

let height = prompt("Enter height")

function checkHeight(height){
    if (height<=100){
        //console.log("need more")
        return true
    }
    else{
        return false
    }

}

if (checkHeight(height)){
    console.log("need more")
}
else {console.log("ok to go")}

//Function Expression
//Difference: Cannot call the expression before initialization but we can call function before declaring.
let func = function(){
    console.log("Hi There")
}

//String Functions
let sentence="My Name iss raisa"
//printing lenth of sstring
console.log(sentence.length) //takes spaces into consideration too
//to reove spaces on the beginning and ending in a string
console.log(sentence.trim())
//searching within a String
console.log("raisa")//returns the index at which the word is found
//Splitting words in a sentence by empty space into an array
console.log(sentence.split(" "))//we can split by any deliminater we prefer
//Trimming by a index ... substring n substr
console.log(sentence.substr(6,2)) //(starting index,length)
console.log(sentence.substring(6,2)) //(starting index,end index) ... 
//replacing character in a String
console.log("my","our")
//covert to upper and lower cases
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
//indexOf
//returns the first index where the character is found first
console.log(sentence.indexOf('m'))
//to get the last index
console.log(sentence.lastIndexOf('m')) //checks string from left hand side



//... Arrow functions...
//basic syntax
let hello=function(a,b){
    console.log(a+b)
}
//shortened arrow syntax
let sum=(w,z)=> console.log(w+z)
hello(2,4)
sum(6,4)

let msg=(v) => v
alert(msg("this is a messege"))

//LODASH Array Remove Method
    //Lodash provides a rich set of array manipulation methods, one being remove.
    //It modifies existing array n doesn't keep backup of original values

    var array = [1, 2, 3, 4];
    var evens = _.remove(array, function(n) { return n % 2 === 0;});
    console.log(array);// => [1, 3]
    console.log(evens);// => [2, 4]