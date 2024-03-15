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
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
    this.author = author;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
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
  constructor(name) {
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
      if (type === 'type' && book.type === value) {
        return book;
      } else if (type === 'author' && book.author === value) {
        return book;
      } else if (type === 'name' && book.name === value) {
        return book;
      } else if (type === 'releaseDate' && book.releaseDate === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let book of this.books) {
      if (book.name === bookName) {
        this.books.splice(this.books.indexOf(book), 1);
        return book;
      }
    }
    return null;
  }
}

// class Student {
//   constructor(name) {
//       this.name = name;
//       this.marks = {};
//   }

//   addMark(subject, mark) {
//       if (mark < 2 || mark > 5) {
//           console.log("Оценка должна быть от 2 до 5");
//           return;
//       }

//       if (!this.marks.hasOwnProperty(subject)) {
//           this.marks[subject] = [];
//       }

//       this.marks[subject].push(mark);
//   }
//   getAverageBySubject(subject) {
//     if (!this.marks.hasOwnProperty(subject)) {
//       return 0;
//     }
//     const marks = this.marks[subject];
//     const sum = marks.reduce((acc, mark) => acc + mark, 0);
//     return sum / marks.length
//   }
//   getAverage() {
//     const subject = Object.keys(this.marks);
//     const totalAverage = subject.reduce((acc, subject) => {
//       return acc + this.getAverageBySubject(subject)
//     }, 0)

//     return totalAverage / subject.length
//   }
// }

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(subject, mark) {
    if (mark < 2 || mark > 5) {
      console.log('Оценка должна быть от 2 до 5');
      return;
    }

    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) {
      return 0;
    }

    const marks = this.marks[subject];
    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    return sum / marks.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}
