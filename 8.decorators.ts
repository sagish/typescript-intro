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
