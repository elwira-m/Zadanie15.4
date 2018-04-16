/////////Zad.1           MODUL 15.4
let one = 'Hello';
let two = 'World';

console.log(`${one}, ${two}!`);

//////////Zad.2
const multiply = (x, y=2) => { return x * y };

console.log(multiply(8));   ///zwr.16

 
/////////Zad.3 
let sum = 0;
const myAverage = (...args) => {args.forEach(arg => sum += arg); return sum/args.length};

console.log(myAverage(2,3,10));

////////Zad.4
sum = 0;
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

console.log(myAverage(...grades));

/////////Zad.5
let names = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = names;
console.log(firstName, lastName);