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




// console.log(this);

const calcAge = function (birthYear) {
  //   console.log(2037 - birthYear);
  //   console.log(this);
};

calcAge(2020);

// const newAge = birthYear => console.log(2020 - birthYear);
// // console.log(this);
// newAge(2000);

//this keyword in a method

const summer = {
  birthYear: 2020,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.birthYear);
  },
};

summer.calcAge();

//method borrowing

const dave = {
  year: 2016,
};

//this keyword is dynamic and depends on how the function is called
dave.calcAge = summer.calcAge;
dave.calcAge();

const k = dave.calcAge;
k(); //this is independent and does not relate to the this code as it will look for the k.this which does not exist


//regular functions and arrow functions

*/

// var firstName = 'Summer';

const summer = {
  firstName: 'summer',
  year: 2020,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    // solution 1
    //use self to get rid of the error
    //     const self = this; //self or that
    //     const isgenz = function () {
    //       console.log(self);
    //       console.log(self.year >= 1996 && self.year <= 2020);
    //     };
    //     isgenz();
    //   },
    //solution 2

    const isgenz = () => {
      console.log(this);
      //   console.error;
      console.log(this.year >= 1996 && this.year <= 2020);
    };
    isgenz();
  },
  //never use arrow function as  a method
  sayHi: () => {
    // console.log(this);
    console.log(`Heyy ${this.firstName}`);
  },
};
summer.sayHi();
summer.calcAge();

//arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(addExpr(2, 2));
addExpr(2, 1);
