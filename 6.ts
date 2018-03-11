`Unions, intersections and type-guards`

class Book {
  constructor(public title: string, public author: string) {}
}

class Magazine {
  constructor(public name: string, public issue: number) { }
}

type Publishable = Book | Magazine;

const mylist: Publishable[] = [
  new Book('A song of ice and fire', 'JRR Martin'),
  new Magazine('Blazer', 100)
]

mylist.forEach(item => {
  if (item instanceof Book) {
    console.log(`I'm a book`, item.author)
  } else {
    console.log(`I'm a magazine`, item.issue)
  }
})
