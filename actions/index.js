const MOVIE_DATA = [
  {
    id: 1,
    name: "Black Panther",
    releaseYear: 2014,
    description: "lorem ipsum",
    rating: 4.9,
    genre: "Adveture",
    image: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
  },
  {
    id: 2,
    name: "Joker",
    releaseYear: 2014,
    description: "lorem ipsum",
    rating: 4.9,
    genre: "Crime",
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351165.jpg?c=2?imbypass=on"
  },
  {
    id: 1,
    name: "Blade runner",
    releaseYear: 2014,
    description: "lorem ipsum",
    rating: 4.9,
    genre: "Adveture",
    image: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on"
  },
  
]

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA)
    }, 2000)
  })
}