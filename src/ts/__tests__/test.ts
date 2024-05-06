import { Movie } from "../Movie";
import { Cart } from "../Cart";

test("add item to cart", () => {
  const movie = new Movie(
    14,
    "Мастер и Маргарита",
    2023,
    "Россия",
    "Дай волю фантазии",
    "Фантастика",
    180,
    900
  );
  const cart = new Cart();
  const expResult = cart.add(movie);
  const arr = [
    {
      id: 14,
      name: "Мастер и Маргарита",
      year: 2023,
      country: "Россия",
      tagline: "Дай волю фантазии",
      genre: "Фантастика",
      time: 180,
      price: 900,
    },
  ];
  expect(expResult).toEqual(arr);
});

test("get all items from cart", () => {
  const movie = new Movie(
    14,
    "Мастер и Маргарита",
    2023,
    "Россия",
    "Дай волю фантазии",
    "Фантастика",
    180,
    900
  );
  const movie1 = new Movie(
    15,
    "Летучий корабль",
    2024,
    "Россия",
    "Окунись в детство",
    "Фэнтези",
    200,
    800
  );
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie1);
  const expResult = cart.items;
  const arr = [
    {
      id: 14,
      name: "Мастер и Маргарита",
      year: 2023,
      country: "Россия",
      tagline: "Дай волю фантазии",
      genre: "Фантастика",
      time: 180,
      price: 900,
    },
    {
      id: 15,
      name: "Летучий корабль",
      year: 2024,
      country: "Россия",
      tagline: "Окунись в детство",
      genre: "Фэнтези",
      time: 200,
      price: 800,
    },
  ];
  expect(expResult).toEqual(arr);
});

test("calculate total amount without bonus", () => {
  const movie = new Movie(
    14,
    "Мастер и Маргарита",
    2023,
    "Россия",
    "Дай волю фантазии",
    "Фантастика",
    180,
    900
  );
  const movie1 = new Movie(
    15,
    "Летучий корабль",
    2024,
    "Россия",
    "Окунись в детство",
    "Фэнтези",
    200,
    800
  );
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie1);
  const expResult = cart.totalAmount();
  const sum = 1700;
  expect(expResult).toBe(sum);
});

test("calculate total amount with bonus", () => {
  const movie = new Movie(
    14,
    "Мастер и Маргарита",
    2023,
    "Россия",
    "Дай волю фантазии",
    "Фантастика",
    180,
    900
  );
  const movie1 = new Movie(
    15,
    "Летучий корабль",
    2024,
    "Россия",
    "Окунись в детство",
    "Фэнтези",
    200,
    800
  );
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie1);
  const expResult = cart.amountWithDiscount(0.01);
  const sum = 1683;
  expect(expResult).toBe(sum);
});

test("delete item from cart", () => {
  const movie = new Movie(
    14,
    "Мастер и Маргарита",
    2023,
    "Россия",
    "Дай волю фантазии",
    "Фантастика",
    180,
    900
  );
  const movie1 = new Movie(
    15,
    "Летучий корабль",
    2024,
    "Россия",
    "Окунись в детство",
    "Фэнтези",
    200,
    800
  );
  const cart = new Cart();
  cart.add(movie);
  cart.add(movie1);
  const expResult = cart.deleteItem(14);
  const arr = [
    {
      id: 15,
      name: "Летучий корабль",
      year: 2024,
      country: "Россия",
      tagline: "Окунись в детство",
      genre: "Фэнтези",
      time: 200,
      price: 800,
    },
  ];
  expect(expResult).toEqual(arr);
});
