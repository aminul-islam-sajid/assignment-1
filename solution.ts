const formatValue = (value: number | string | boolean) => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return value ? false : true;
  } else {
    return value ? true : false;
  }
};

const getLength = (value: string | any[]) => {
  return value.length;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age:${this.age}`;
  }
}



const filterByRating = (books: { title: string; rating: number }[]) => {
  const filter = 4;
  return books.filter((book) => book.rating >= filter);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
