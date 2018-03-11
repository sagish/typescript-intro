`Compiling`

type Delayed = (_: number) => Promise<any>;

const delay: Delayed = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sumArray(...args: number[]) {
  return args.reduce((acc, i) => acc + i);
}

async function exec(): Promise<boolean> {
  const sum = sumArray(1, 2, 3);

  console.log(`Waiting 2 seconds`);
  await delay(2000);
  console.log(`The sum of 1 + 2 + 3 is ${sum}`);

  return true;
}

exec();

// tsc 3.ts --removeComments --t es5
// tsc 3.ts --removeComments --t es2015
// tsc 3.ts --removeComments --t es2018
