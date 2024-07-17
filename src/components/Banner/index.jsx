import React, { memo, useState } from "react";
import styled from "styled-components";
import Modal from "../ModalTrailer";
import Tmdb from "../../api/Tmdb";

const StyledSection = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(https://image.tmdb.org/t/p/original${props => props.$item.backdrop_path});
`;

const StyledDivVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

const StyledDivHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 30px 100px 30px;

    h1{
        font-size: 60px;
        font-weight: bold;
    }

    @media (max-width: 760px) {
        padding-top: 50px;

        h1{
            font-size: 40px;
        }
    }
`;

const StyledInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

    span{
        display: inline-block;
        margin-right: 15px;
    }
    .banner--points {
        color: #46D369;
    }

    @media (max-width: 760px) {
        font-size: 16px;
    }
`;

const StyledDescription = styled.p`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;

    @media (max-width: 760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
`;

const StyledButton = styled.div`

    .watch-button {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 15px 25px;
        border-radius: 5px;
        background-color: #FFF;
        color: #000;
        opacity: 1;
        transition: all ease 0.2s;
        cursor: pointer;
    }
    .watch-button:hover {
        opacity: 0.7;
    }

    @media (max-width: 760px) {
        .watch-button {
            font-size: 16px;
        }
    }
`;

const StyledGenres = styled.p`
    margin-top: 20px;
    font-size: 18px;
    color: #999;

    @media (max-width: 760px) {
        font-size: 14px;
    }
`;

const Banner = memo(({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const [trailerKey, setTrailerKey] = useState(null);

    const firstDate = new Date(item.first_air_date);
    const genres = item.genres.map(genre => genre.name).join(', ');
    let description = item.overview;

    if (description.length > 250) {
        description = `${description.substring(0, 250)}...`;
    }

    const handleClick = async (item) => {
        const trailer = await Tmdb.getTrailer(item.id, 'tv');

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

    return (
        <StyledSection $item={item}>
            <StyledDivVertical>
                <StyledDivHorizontal>
                    <h1>{item.name}</h1>
                    <StyledInfo>
                        <span className="banner--points">{item.vote_average.toFixed(1)} pontos</span>
                        <span className="banner--year">{firstDate.getFullYear()}</span>
                        <span className="banner--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</span>
                    </StyledInfo>
                    <StyledDescription>{description}</StyledDescription>
                    <StyledButton>
                        <div className="watch-button" onClick={() => handleClick(item)}>▶︎ Assistir</div>
                    </StyledButton>
                    <StyledGenres>
                        <strong>Gêneros:</strong> {genres}
                    </StyledGenres>
                </StyledDivHorizontal>
            </StyledDivVertical>
            <Modal show={showModal} onClose={handleCloseModal} videoKey={trailerKey} />
        </StyledSection>
    );
});

export default Banner;
