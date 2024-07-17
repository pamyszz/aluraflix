import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import useMovieData from "./hooks/useMovieData";
import Main from "./components/Main";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

function App() {
  const { movieList, bannerData } = useMovieData();
  const renderList = movieList.length <= 0 ? <Loading /> : <Main bannerData={bannerData} movies={movieList} />

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={renderList} />
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
