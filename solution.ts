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

type User = {
  id: number;
  name: string;
  email: string | number;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]) => {
  const activeUser = users.filter((user) => user.isActive === true);
  return activeUser;
};

type Book = {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
};
const printBookDetails = (book: Book) => {
  const { title, author, publishedYear, isAvailable } = book;

  if (book) {
    return `Title: ${title}, Author: ${author}, PublishedYear: ${publishedYear}, Available:${
      isAvailable ? "Yes" : "No"
    }`;
  } else {
    return "no Book Found";
  }
};

const getUniqueValues = (array1: number[], array2: number[]) => {
  const array1array2 = [...array1, ...array2];
  const unicNumber = Array.from(new Set(array1array2));

  return unicNumber.sort((a, b) => a - b);
};

type product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: product[]) => {
  const totalProduct = products.map((product) => {
    let price = product.price;
    if (product.discount) {
      const diccountPrice = (product.price * product.discount) / 100;
      price = product.price - diccountPrice;
    }
    return price * product.quantity;
  });

  return totalProduct.reduce((total, value) => total + value);
};
