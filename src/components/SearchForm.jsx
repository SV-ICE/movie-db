import s from "./../styles/SearchForm.module.css"

const SearchForm = ({ searchTerm, setSearchTerm }) => {
    return (
        <form className={s.form}>
            <label> Search movies:</label>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Your query"
                />
        </form>
    );
};

export default SearchForm;
