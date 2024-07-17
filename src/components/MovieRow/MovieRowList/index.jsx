import styled from "styled-components"
import Tmdb from "../../../api/Tmdb";
import Modal from "../../ModalTrailer";
import { useState } from "react";

const StyledRowList = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

const StyledList = styled.div`
    width: ${props => props.$listWidth}px;
    margin-left: ${props => props.$scrollX}px;
    transition: all ease 0.5s;

    div{
        display: inline-block;
        width: 150px;
        cursor: pointer;
    }

    img{
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    img:hover {
        transform: scale(1);
    }
`;

const MovieRowList = ({ items, scrollX, isTvShow }) => {
    const [showModal, setShowModal] = useState(false);
    const [trailerKey, setTrailerKey] = useState(null);

    const handleClick = async (item) => {
        const type = isTvShow || item.media_type === 'tv' ? 'tv' : 'movie';
        const trailer = await Tmdb.getTrailer(item.id, type);

        if (trailer) {
            setTrailerKey(trailer.key);
        } else {
            setTrailerKey(null);
        }
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setTrailerKey(null);
    };

    return(
        <StyledRowList>
            <StyledList 
                $listWidth={items.results.length * 150}
                $scrollX={scrollX}
            >
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} onClick={() => handleClick(item)}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                ))}
            </StyledList>
            <Modal show={showModal} onClose={handleCloseModal} videoKey={trailerKey} />
        </StyledRowList>
    )
}

export default MovieRowList