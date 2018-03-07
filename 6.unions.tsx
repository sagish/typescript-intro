`Unions, intersections and type-guards`

class Book {
  constructor(public title: string, public author: string) {}
}

class Magazine {
  constructor(public name: string, public issue: number) { }
}

// type Publishable = Book | Magazine;

// const book1: Book = new Book('A song of ice and fire', 'JRR Martin')
// const magazine1: Magazine = new Magazine('Blazer', 100);

// const list: Publishable[] = [book1, magazine1]

// const rand = Math.random();
// const list: Publishable[] = [book1, magazine1, rand]

// list.forEach(item => {
//   if (item instanceof Book) {
//     console.log(`I'm a book`, item)
//   } else {
//     console.log(`I'm a magazine`, item)
//   }
// })
