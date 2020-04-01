import { useRouter } from "next/router";
import { getMovieById } from "../../actions";
const Movie = props => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">
          {movie.description}
        </p>
        <hr className="my-4" />
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};

// call a get moviebyId

Movie.getInitialProps = async (context) => {
  const { id } = context.query
  const movie = await getMovieById(id)
  return { movie }
}

export default Movie;
