import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MoovieSearch from "./components/MoovieSearch";
import MovieDetailPage from "./components/MovieDetailPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MoovieSearch />} />
                    <Route path="/movie-db" element={<MoovieSearch />} />
                    <Route path="/movie/:id" element={<MovieDetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
