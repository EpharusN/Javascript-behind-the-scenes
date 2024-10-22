'use strict';
//hoisting

//tdz => temporal dead zone
//allows each catch of error// works better with const// in tdz mode a variable exists but it cannot be accessed until it is not declared

/*

this keyword
the this keywrd is not static and depends on how the function is called.
the this keyword points at the 'owner' of the function in which the this keyword is used
its value is only assigned when the function is actually called


const thisPet = {
firstName: 'Dave'
occupation: 'cutey'
birthYear: 2020

calcAge: function(){

this.age = 2024 - this.birthYear
return this.age

}
}
thisPet.calcAge()
console.log(thisPet.age)


*/
