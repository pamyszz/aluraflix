import { useEffect, useState } from "react";
import Tmdb from "../api/Tmdb";

const useMovieData = () => {
    const [movieList, setMovieList] = useState([]);
    const [bannerData, setBannerData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            try {
                let list = await Tmdb.getHomeList();
                setMovieList(list);

                let originals = list.find(i => i.slug === 'originals');
                if (originals && originals.items.results.length > 0) {
                    let randomChosen = Math.floor(Math.random() * originals.items.results.length);
                    let chosen = originals.items.results[randomChosen];
                    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
                    setBannerData(chosenInfo);
                }
            } catch (error) {
                console.error("Erro ao carregar os dados dos filmes: ", error);
            }
        };

        loadAll();
    }, []);

    return { movieList, bannerData };
};

export default useMovieData;
