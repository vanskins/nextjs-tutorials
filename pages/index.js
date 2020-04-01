import React from "react";

import Sidemenu from "../components/sidemenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies, getCategories } from "../actions";
const Home = props => {
  const { movies, images, categories } = props
    return (
      <div>
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Sidemenu categories={categories} />
              </div>
              <div className="col-lg-9">
                <Carousel images={images} />
                <div className="row">
                  <MovieList movies={movies || []} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map( movie => ({ id: `image-${movie.id}`, url: movie.image, title: movie.name }))
  return {
    movies,
    images,
    categories
  };
}

export default Home;
