`Bulit-in types`

let random: any = true // 2, null

// let num: number | null = 2;

// enum Color { Red, Blue, Green }
// let myColor: Color = Color.Blue;

function log(message: any): void {
  console && console.log("Logger:" + message);
  // return true;
}
// log('Hello');

function sumArray(...args: number[]) {
  return args.reduce((acc, i) => acc + i);
}

const sum = sumArray(1, 2, 3);
log(`The sum is ${sum}`);

// tsc 3.built-in.tsx --removeComments --t es5
// tsc 3.built-in.tsx --removeComments --t es2015
