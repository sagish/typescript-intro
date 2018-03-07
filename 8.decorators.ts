`Advanced features`

+ `Decorators (High Order Functions)`

function deprecated(target: Object, key: string, descriptor: PropertyDescriptor) {
  console.warn(`calling a deprecated method`, target);
}

class Logger {
  @deprecated
  static echo(...args: any[]) {
    console.log(args);
  }
}

Logger.echo(1, 2, 3);
// calling a deprecated method
// 1 2 3

// + `Namespaces (Modules)`

// namespace Validation {
//   export class ZipCodeValidator {
//     constructor(public zip: number) {}

//     isAcceptable(s: string) {
//       return this.zip <= 9999999 && this.zip >= 10000;
//     }
//   }
// }

// Validation.ZipCodeValidator
