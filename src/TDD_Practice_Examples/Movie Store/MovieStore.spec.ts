//dont forget to import your functions
import { MovieStore } from "./MovieStore";
// const MovieStore = require('./MovieStore');

describe("Movie Store", () => {
  let store;
  beforeEach(() => {
    store = new MovieStore();
  });

  test("should have initial movies array list", () => {
    expect(store !== undefined).toBe(true);
  });
  test("should add a movie to inventory array", () => {
    store.addToInventory("Blade Runner");
    expect(store.inventory.length).toEqual(1);
  });
  test("should track if desired rental is in stock", () => {
    store.addToInventory("Blade Runner");
    expect(store.inventory[0].isInStock).toBe(true);
  });
  test("calculates total cost from number of rentals * number of days", () => {
    store.addToInventory("Blade Runner");
    store.addToInventory("Lord of the Rings: Return of the King");
    store.addToInventory("Star Wars: A New Hope");
    expect(
      store.rentMovies(["Blade Runner", "Star Wars: A New Hope"], 3)[0]
    ).toBe(9);
  });
  test("calculates total cost from number of rentals * number of days, excluding movies that are not in stock", () => {
    store.addToInventory("Blade Runner");
    store.addToInventory("Lord of the Rings: Return of the King");
    store.addToInventory("Star Wars: A New Hope");
    expect(
      store.rentMovies(["Blade Runner", "Star Wars: A New Hope"], 3)[0]
    ).toBe(9);
    expect(
      store.rentMovies(
        ["Lord of the Rings: Return of the King", "Star Wars: A New Hope"],
        3
      )
    ).toStrictEqual([
      4.5,
      "These titles are not available: Star Wars: A New Hope",
    ]);
  });
});
