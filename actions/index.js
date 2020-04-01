const MOVIE_DATA = [
  {
    id: 1,
    name: "Black Panther",
    releaseYear: 2014,
    description: "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the eighteenth film in the Marvel Cinematic Universe (MCU).",
    rating: 4.9,
    genre: "Adveture",
    image:
      "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
  },
  {
    id: 2,
    name: "Joker",
    releaseYear: 2014,
    description:
      "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides a possible origin story for the character.",
    rating: 4.9,
    genre: "Crime",
    image:
      "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351165.jpg?c=2?imbypass=on"
  },
  {
    id: 3,
    name: "Blade runner",
    releaseYear: 2014,
    description: "Blade Runner 2049 is a 2017 American neo-noir science fiction film directed by Denis Villeneuve and written by Hampton Fancher and Michael Green. A sequel to the 1982 film Blade Runner, the film stars Ryan Gosling and Harrison Ford, with Ana de Armas, Sylvia Hoeks, Robin Wright, Mackenzie Davis, Carla Juri, Lennie James, Dave Bautista, and Jared Leto in supporting roles. Ford and Edward James Olmos reprise their roles from the original. Set thirty years after the first film, Gosling plays K, a Nexus-9 replicant blade runner who uncovers a secret that threatens to destabilize society and the course of civilization. Original director Ridley Scott served as an executive producer on the film.",
    rating: 4.9,
    genre: "Adveture",
    image:
      "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/91406/Blade-Runner-2049-Final-Style-Poster-buy-original-movie-posters-at-starstills__83407.1519904794.jpg?c=2&imbypass=on"
  }
];

const CATEGORY_DATA = [
  {
    id: 1, name: "Drama"
  },
  {
    id: 2, name: "Action"
  },
  {
    id: 3, name: "Adventure"
  },
  {
    id: 4, name: "Comedy"
  },
]

// Todo get category function

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    }, 2000);
  });
}


export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA);
    }, 2000);
  });
};

export const getMovieById = id => {
  return new Promise((resolve, reject) => {
    const movie = MOVIE_DATA.find(i => i.id == id);
    setTimeout(() => {
      resolve(movie);
    }, 1000);
  });
};
