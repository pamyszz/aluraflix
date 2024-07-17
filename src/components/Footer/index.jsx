import styled from "styled-components";

const StyledFooter = styled.footer`
    height: 150px;
    background-color: black;
    border-top: 4px solid #2271D1;
    box-shadow: 0 -7px 30px rgba(34, 113, 209, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    font-size: 20px;
    gap: 7px;

    img{
        max-width: 169px;
    }
    a{
        color: #2271D1;
    }

    @media (max-width: 760px) {
        font-size: 16px;
        height: 125px;
        gap: 5px;

        img{
            max-width: 125px;
        }
    }
`;

const Footer = () => {
    return(
        <StyledFooter>
            <img src="/images/aluraflixLogo.svg" alt="Logo AluraFlix"/>
            <div>Feito por <a href="https://www.linkedin.com/in/rodrigoferreirapereira/" target="_blank">Rodrigo Ferreira Pereira</a></div>
            <div>Dados pegos do site <a href="https://www.themoviedb.org" target="_blank">themoviedb.org</a></div>
        </StyledFooter>
    )
}

export default Footer;