import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../api/api";

const MovieDetailPage = () => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchDetails(id, setMovie, setIsLoading, setError);
    }, [id]);

    return (
        <div>
            {isLoading && <p>Loading...⌛</p>}
            {error ? (
                <p>❗{error}</p>
            ) : (
                <div>
                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                    <h2>
                        {movie.title}
                        <span>
                            ({movie.original_title}) {movie.release_date}
                        </span>
                    </h2>
                    <p>{movie.overview}</p>
                    <span>
                        Budget: {movie.budget > 0 ? movie.budget : "none of information"}
                    </span>
                </div>
            )}
        </div>
    );
};

export default MovieDetailPage;
