import Banner from "../Banner";
import MovieRow from "../MovieRow";
import styled from "styled-components";

const StyledMain = styled.main`
    section{
        margin-top: -100px;
    }
`;

const Main = ({ bannerData, movies }) => {
    return(
        <StyledMain>
            {bannerData &&
                <Banner item={bannerData} />
            }
            <section>
                {movies.map((item, key) => {
                    const isTvShow = item.slug === 'originals';
                    return <MovieRow key={key} title={item.title} items={item.items} isTvShow={isTvShow}/>
                })}
            </section>
        </StyledMain>
    )
}

export default Main;