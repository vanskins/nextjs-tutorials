import React from "react";
import Link from "next/link";
const MovieList = props => {
  const { movies } = props;
  return (
    <React.Fragment>
      {movies.map((movie, index) => (
        <div key={index} className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
              <a>
                <img
                  className="card-img-top"
                  src={movie.image}
                  alt={movie.image}
                />
              </a>
            </Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                  <a>{movie.name}</a>
                </Link>
              </h4>
              <h5>$24.99</h5>
              <p className="card-text">{movie.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                &#9733; &#9733; &#9733; &#9733; &#9734;
              </small>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default MovieList;
