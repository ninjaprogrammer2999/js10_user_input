// User input!***
/*
confirm("Ok === true \n cancel === false");
console.log(confirm);
// let's store this in a variable */
/*
let input = confirm("Ok === true \n cancel === false");
console.log(input);
*/
////////////////////////////////////////////////////////////////////////
// 3rd type // prompt 
//prompt("enter your name:");
// so let's store this input in a variable***
/*
let name = prompt("enter your name");
console.log(name);
*/
// if we press cancel we get a null value on console
// we can't do the same thing with a null as with strings**
// null could also translate as false, zero or undifined ****

// **** a new way to check that
// by using *** nullish coalescing operator ***
///////////////////////////////////////////////////////////
// nullish coalescing operator (??) ****
/*
let name = prompt ("enter your name:");
console.log(name ?? "you did'nt enter your name.");
*/
////////////////////////////////////////////////////////////
/*
let name = prompt("enter your name.");
if (name) {
    console.log(name?? "you didn't enter your name.");
} else {
    console.log("you didn't enter your name.");
} */
////////////////////////////////////////////////////////
/*
let name = prompt ("enter your name.");
if (name) {
    console.log(name);
} else {
    console.log("you didn't enter your name.");
} */
//////////////////////////////////////////////////////////
let name = prompt("enter your name.");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
    
} else {
    console.log("you didn't enter your name.");
}
///////////////////////////////////////////////////////





















