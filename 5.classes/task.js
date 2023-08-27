class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }
  set state(newState) {
    if (newState < 0) {
      newState = 0;
    } else if (newState > 100) {
      newState = 100;
    } else this._state = newState;
  }
  get state() {
    return this._state;
  }
}
const sherlock = new PrintEditionItem(
  'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
  2019,
  1008
);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {
  constructor(type) {
    super(type);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(type) {
    super(type);
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(type) {
    super(type);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(type) {
    super(type);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(type) {
    super(type);
    this.type = 'detective';
  }
}

const picknick = new FantasticBook(
  'Аркадий и Борис Стругацкие',
  'Пикник на обочине',
  1972,
  168
);

console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      } else {
        return null;
      }
    }
  }
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1);
      } else {
        return null;
      }
    }
  }
}

const library = new Library('Библиотека имени Ленина');

library.addBook(
  new DetectiveBook(
    'Артур Конан Дойл',
    'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    'Аркадий и Борис Стругацкие',
    'Пикник на обочине',
    1972,
    168
  )
);
library.addBook(new NovelBook('Герберт Уэллс', 'Машина времени', 1895, 138));
library.addBook(new Magazine('Мурзилка', 1924, 60));

console.log(library.findBookBy('name', 'Властелин колец')); //null
console.log(library.findBookBy('releaseDate', 1924).name); //"Мурзилка"

console.log('Количество книг до выдачи: ' + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName('Машина времени');
console.log('Количество книг после выдачи: ' + library.books.length); //Количество книг после выдачи: 3
