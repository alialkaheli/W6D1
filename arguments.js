function sum(...args){
  let sum = 0;
  args.forEach((el) =>{
    sum += el;
  });
  return sum;
}

// console.log(sum(1, 2, 3, 4) === 10,sum(1, 2, 3, 4, 5) === 15);



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Function.prototype.myBind = function(){
  const args1 = Array.from(arguments);
  const fn = this;
  return function func() {

    const args2 = Array.from(arguments);
    // args = args1.concat(args2);
    return fn.apply(args1[0],args1.slice(1).concat(args2));
  };

};

// Function.prototype.myBind = function(context, ...args1){
//   return (...args2) => {
//     args = args1.concat(args2);
//     return this.call(context,args[0],args[1]);
//   };
//
// };
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
//
// markov.says.myBind(pavlov, "meow", "Kush")();
//
// markov.says.myBind(pavlov)("meow", "a tree");
//
// markov.says.myBind(pavlov, "meow")("Markov");
//
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");




// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
//
// sumThree(4, 20, 6); // == 30
//
// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30
//
// // or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30


function curriedSum(numArgs){
  let numbers = [];
  function _curriedSum(){
    // console.log(arguments);
    numbers = numbers.concat(Array.from(arguments));
    console.log(numbers);
    if(numArgs === numbers.length){
      let sum = 0;
      for (var i = 0; i < numbers.length; i++) {
          sum += numbers[i];
      }
      return sum;
    }else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}
const sum1 = curriedSum(4);
console.log(sum1(5)(30)(20)(1)); // => 56




// Function  =
// function curry2(numArgs) {
//   // console.log(arguments);
//   let number =[];
//   const _curriedfn = (arg) => {
//      number.push(arg);
//       // console.log(numArgs);
//       // console.log(args);
//     if(numArgs === number.length){
//       return this(...number);
//     }else {
//
//        return _curriedfn;
//
//     }
//   };
//   return _curriedfn;
// }

function curry(num){
  this.num = num;

}

Function.prototype.curry2 = function (numArgs) {
  const args = [];
  const _curriedFn = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      // spreading the array into individual arguments
      return this(...args);
    } else {
      return _curriedFn;
    }
  };
  return _curriedFn;
};

const adder = function (...argBalls) {
    return argBalls.reduce((a, b) => {
      return a + b;
    });
  };
const sum2 = adder.curry2(4)(5)(30)(20)(1);
console.log(sum2);
