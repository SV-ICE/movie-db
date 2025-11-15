export const BASE_URL = "https://api.themoviedb.org/3/search/movie";
export const DETAIL_URL = "https://api.themoviedb.org/3/movie";
export const API_KEY = "93391a9286e52eb614814a763c0496d4";

export const fetchData = async (searchTerm, setError, setIsLoading, setMoovies, setIsSearched) => {
	setError(null);
	setIsLoading(true);
	try {
		const response = await fetch(
			`${BASE_URL}?api_key=${API_KEY}&query=${searchTerm}`
		);
		if (response.ok) {
			const data = await response.json();
			setMoovies(() => {
				return [...data.results];
			});
			setIsSearched(true);
		} else {
			setMoovies([]);
			throw new Error(`Ошибка ${response.status}`);
		}
	} catch (e) {
		setError(e.message);
	} finally {
		setIsLoading(false);
	}
};

export const fetchDetails = async (id, setMovie, setIsLoading, setError) => {
	setError(null);
	setIsLoading(true);
	try {
		const response = await fetch(
			`${DETAIL_URL}/${id}?api_key=${API_KEY}`
		);
		if (response.ok) {
			const data = await response.json();
			setMovie(() => {
				return {...data};
			});
		} else {
			setMovie({});
			throw new Error(`Ошибка ${response.status}`);
		}
	} catch (e) {
		setError(e.message);
	} finally {
		setIsLoading(false);
	}
};