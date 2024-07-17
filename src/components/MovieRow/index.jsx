import styled from "styled-components";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MovieRowList from "./MovieRowList";
import MovieRowButton from "./MovieRowButton";
import { useState } from "react";

const StyledMovieRow = styled.div`
    margin-bottom: 30px;

    h2 {
        margin: 0 0 0 30px;
    }
    .movieRow--left{
        left: 0;
    }
    .movieRow--rigth{
        right: 0;
    }

    &:hover .movieRow--left,
    &:hover .movieRow--rigth {
        opacity: 1;
    }

    @media (max-width:760px) {
        .movieRow--left,
        .movieRow--rigth {
            opacity: 1;
        }
    }
`;

const MovieRow = ({ title, items, isTvShow }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        setScrollX(prevScrollX => Math.min(prevScrollX + Math.round(window.innerWidth / 2), 0));
    }

    const handleRightArrow = () => {
        setScrollX(prevScrollX => {
            const listWidth = items.results.length * 150;
            return Math.max(prevScrollX - Math.round(window.innerWidth / 2), window.innerWidth - listWidth - 60);
        });
    }

    return(
        <StyledMovieRow>
            <h2>{title}</h2>

            <MovieRowButton 
                icon={<NavigateBeforeIcon style={{fontSize: 50}}/>}
                classname='movieRow--left'
                onClick={handleLeftArrow}
            />
            <MovieRowButton 
                icon={<NavigateNextIcon style={{fontSize: 50}}/>}
                classname='movieRow--rigth'
                onClick={handleRightArrow}
            />

            <MovieRowList items={items} scrollX={scrollX} isTvShow={isTvShow}/>
        </StyledMovieRow>
    )
}

export default MovieRow;