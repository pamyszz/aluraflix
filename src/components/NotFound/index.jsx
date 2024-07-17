import { useEffect, useState } from "react";
import styled from "styled-components";
import Tmdb from "../../api/Tmdb";
import Loading from "../Loading";

const StyledNotFound = styled.section`
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 75px;

    h1{
        font-size: 100px;
        margin: 0;
    }
    h2{
        font-size: 50px;
        margin: 0;
    }
    .face{
        transform: rotate(-90deg);
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        div{
            flex-direction: row;
        }
    }

    @media (max-width: 999px) {
        height: calc(100vh - 125px);
        flex-direction: column;
        justify-content: center;
        gap: 25px;

        img{
            height: 500px;
        }
        h1{
            font-size: 75px;
        }
        h2{
            font-size: 50px;
        }
    }

    @media (max-width: 760px) {
        img{
            height: 325px;
        }
        h1{
            font-size: 50px;
        }
        h2{
            font-size: 30px;
        }
    }
`;

const NotFound = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            let errorMovie = await Tmdb.getMovieInfo('1259453', 'movie');
            setMovie(errorMovie);
        }

        getMovie();
    }, [])

    return (
        <>
            {movie ? (
                <StyledNotFound>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}/>

                    <div>
                        <h1>{movie.original_title}</h1>
                        <div>
                            <h2>Página não encontrada!</h2>
                            <h2 className="face">):</h2>
                        </div>
                    </div>
                </StyledNotFound>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default NotFound;