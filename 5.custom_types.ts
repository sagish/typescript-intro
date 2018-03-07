`Custom types and interfaces`

type IAddress = {
  street: string,
  zipcode: number,
  builtAt: Date,
}

// const address: IAddress = {
//   zipcode: 1,
//   street: "Ibn Gavirol",
//   builtAt: new Date('1988')
// }

// interface withAddress {
//   address: Address,
// }

// interface withID {
//   id: () => number,
// }

// export class Person implements withID, withAddress {
//   private _id: number;
//   // private readonly _id;

//   constructor(
//     public name: string,
//     public age: number,
//     public address: Address
//   ) {}

//   id() {
//     return this._id = this._id || Math.random() * 10000;
//   }
// }
