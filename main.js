// Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
// Console.log the length of the array.
// Use node main.js to run the program.
      // .length
let cars = ['Ford', 'Nissan', 'Dodge', 'Mazda']

// console.log(cars.length);

// .concat()
// Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
// Run the program.

let moreCars = ['BMW', 'Mercedes', 'Kia', 'Honda']

 let totalCars = cars.concat(moreCars);

console.log(totalCars);

// .indexOf() and .lastIndexOf()
// Use the indexOf method to console.log the index of Honda.
// Use the lastIndexOf method to console.log the index of Ford.
// Run the program.

console.log(moreCars.indexOf('Honda'));

console.log(cars.lastIndexOf('Ford'));


// Use the join method to covert the array totalCars into a string called stringOfCars.
// Run the program.

let stringOfCars = totalCars.join(' ');

console.log(stringOfCars);


// Use the split method to convert stringOfCars back intro an array called totalCars.
// Run the program.

let totalCarsTwo = stringOfCars.split();
console.log(totalCarsTwo);

// Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
// Run the program.
console.log('forward', totalCars);

let carsInReverse = totalCars.reverse();
console.log('reversed', carsInReverse);


// Use the sort method to put the array carsInReverse into alphabetical order.
// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction:

console.log(carsInReverse.sort());

// Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
// .slice()
let removedCars = carsInReverse.slice(6, 8);
console.log('the removed cars are', removedCars);

// Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
carsInReverse.splice(1, 2, 'Ford', 'Honda');
console.log(carsInReverse);

// Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push('Kia', 'Mercedes');
console.log(carsInReverse);

// Use the pop method to remove and console.log the last item in the array carsInReverse.

console.log(carsInReverse.pop());

// Use the shift method to remove and console.log the first item in the array carsInReverse.
 console.log(carsInReverse.shift());

// Use the unshift method to add a new type of car to the array carsInReverse.
 console.log(carsInReverse.unshift('red wagon', 'jeep'));


// Create an array called numbers with the following items: 23, 45, 0, 2 
// Write code that will add 2 to each item in the array numbers.
// .forEach() requires a function to be passed into it as its first argument.
//  Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. 
//  const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

let numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

function addTwo(i){
      console.log(i += 2);
          
    }
    
    console.log(numbers.forEach(addTwo))





