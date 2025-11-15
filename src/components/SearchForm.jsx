import s from "./../styles/SearchForm.module.css"

const SearchForm = ({ searchTerm, setSearchTerm }) => {
    return (
        <form className={s.form}>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type your request..."
                />
        </form>
    );
};

export default SearchForm;
