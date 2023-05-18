// class Clock {
//     constructor() {
//         this.date = new Date();
//         this.hours = this.date.getHours();
//         this.minutes = this.date.getMinutes();
//         this.seconds = this.date.getSeconds();
//         this.printTime();
//         setInterval(this.tick.bind(this), 1000);
//     };

//     printTime() {
//         const time = `${this.hours}:${this.minutes}:${this.seconds}`;
//         console.log(time);
//     };

//     tick() {

//         this.seconds += 1;
//         if (this.seconds === 60) {
//             this.minutes += 1;
//             this.seconds = 0;
//             if (this.minutes === 60) {
//                 this.hours += 1;
//                 this.minutes = 0;
//                 this.seconds = 0;
//             };
//         };
//         this.printTime();
//     };
// };

// const clock = new Clock();

// const reader = require('readline').createInterface({

// input: process.stdin,
// output: process.stdout

// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft > 0) {
//         console.log(sum);
//         reader.question('input a number', num => {
//             const number = parseInt(num);
//             console.log(`partial sum: ${sum += number}`);
//             addNumbers(sum, numsLeft - 1, completionCallback);
//         });
//     } else {
//         reader.close();
//     };
//     completionCallback(sum);
// };

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


Function.prototype.myBind = function(context) {
        //ES6 syntax
//     // return() => this.apply(context);

//     // know how to do this in ES5 syntax for the asssessment and beyond
    // const func = this;
    return function() {
        return func.apply(context)
    };
};

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }

  const turnOn = function() {
    console.log("Turning on " + this.name);
  };

  const lamp = new Lamp();

  turnOn(); // should not work the way we want it to

  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);

  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"
