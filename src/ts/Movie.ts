import Buyable from "./Buyable";

export class Movie implements Buyable {
  id: number;
  name: string;
  year: number;
  country: string;
  tagline: string;
  genre: string;
  time: string | number;
  price: number;

  constructor(
    id: number,
    name: string,
    year: number,
    country: string,
    tagline: string,
    genre: string,
    time: string | number,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genre = genre;
    this.time = time;
    this.price = price;
  }
}
