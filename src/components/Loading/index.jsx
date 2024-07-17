import styled from "styled-components";

const StyledLoading = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        width: 750px;
    }
`;

const Loading = () => {
    return(
        <StyledLoading>
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
        </StyledLoading>
    )
}

export default Loading;