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

  add(movieTitle: string) {
    this.inventory.push({movie: movieTitle, isInStock: true})
  }
  rentMovies(movieRentals: string[], daysToRent: number): number {
    let result = 0;
    // 1.5 is the daily cost of a movie rental
    // result = movieRentals.length * 1.5 * daysToRent;
    this.inventory.forEach(movie => {
        if (movieRentals.includes(movie.movie) && movie.isInStock === true) {
            result += 1.5 * daysToRent
            movie.isInStock = false
        }
    })
    return result;
  }
}
