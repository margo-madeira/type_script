import Buyable from "./Buyable";
import { Movie } from "./Movie";

export class Cart {
  //корзина товаров
  _items: Buyable[] = []; //хранит все товары

  add(item: Buyable): Buyable[] {
    //добавляет товар в корзину
    this._items.push(item);
    return this._items;
  }

  get items(): Buyable[] {
    //возвращает список товаров в корзине
    return [...this._items];
  }

  totalAmount(): number {
    //считает итог стоимость всех товаров

    const total = this._items.reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber.price;
    }, 0);
    return Math.ceil(total);
  }

  amountWithDiscount(discount: number): number {
    // итог стоимость с учетом скидки

    return Math.ceil(this.totalAmount() - this.totalAmount() * discount);
  }

  deleteItem(id: number): Buyable[] {
    //удаляет товар из корзины по id
    let index = this._items.findIndex((el) => el.id === id);
    this._items.splice(index, 1);
    return this._items;
  }
}

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
cart.totalAmount();
cart.amountWithDiscount(0.01);
cart.deleteItem(14);
