import { Link } from "react-router-dom";
import s from "./../styles/MooviesList.module.css";

const MooviesList = ({ moovies }) => {
    return (
        <div className={s.list}>
            {moovies.map((moovie) => {
                return (
                    <Link to={`/movie/${moovie.id}`} className={s.item} key={moovie.id}>
                        {moovie.poster_path && (
                            <div className={s.poster}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${moovie.poster_path}`}
                                    alt={moovie.title}
                                />
                            </div>
                        )}
                        <div className={s.info}>
                            <h2>{moovie.title}</h2>
                            <p>{moovie.release_date}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default MooviesList;
