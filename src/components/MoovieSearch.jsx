import { useEffect, useState } from "react";
import { fetchData } from "../api/api.js";
import MooviesList from "./MooviesList.jsx";
import SearchForm from "./SearchForm.jsx";
import s from "./../styles/MoovieSearch.module.css"

const MoovieSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [moovies, setMoovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        if (searchTerm.length > 2) {
            fetchData(searchTerm, setError, setIsLoading, setMoovies, setIsSearched);
        }
    }, [searchTerm]);

    return (
        <div className={s.container}>
            <SearchForm
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            {isLoading && <p className={s.loading}>Loading...⌛</p>}
            {error && <p className={s.error}>❗{error}</p>}
            {moovies.length !== 0 && <MooviesList moovies={moovies} />}
            {isSearched && moovies.length === 0 && <p>❌ No results!</p>}
        </div>
    );
};
 
export default MoovieSearch;
