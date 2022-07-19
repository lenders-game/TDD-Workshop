// A movie store is asking you to make an application
// the application can add movies to an inventory array, x
// track if a movie is rented out or in stock, x
// and calculate a customer's total cost for the # of rentals * # of days. x
// A customer can only rent a movie if it is in stock.
export class MovieStore {
  inventory: any[];
  constructor() {
    this.inventory = [];
  }

  addToInventory(movieTitle: string) {
    this.inventory.push({ title: movieTitle, isInStock: true });
  }

  rentMovies(movieRentals: string[], daysToRent: number): [number, string] {
    let totalCost = 0;
    let unavailableMovies: Array<string> = [];
    let unavailableMessage = "";

    this.inventory.forEach((movie) => {
      if (movieRentals.includes(movie.title) && movie.isInStock) {
        totalCost += 1.5 * daysToRent;
        movie.isInStock = false;
      } else if (movieRentals.includes(movie.title) && !movie.isInStock) {
        unavailableMovies.push(movie.title);
      }
    });
    if (unavailableMovies.length > 0) {
      unavailableMessage = `These titles are not available: ${unavailableMovies.join(
        ", "
      )}`;
    }
    return [totalCost, unavailableMessage];
  }
}
