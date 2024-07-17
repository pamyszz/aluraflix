import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: ${props => props.$black ? '#141414' : 'transparent'};
    border-bottom: 4px solid ${props => props.$black ? '#2271D1' : 'transparent'};
    box-shadow: 0 7px 30px ${props => props.$black ? 'rgba(34, 113, 209, 0.5)' : 'transparent'};
    transition: all ease 0.5s;

    .header-logo{
        height: 30px;
    }
    .header-avatar{
        height: 50px;
        border-radius: 3px;
    }

    @media (max-width:760px) {
        height: 70px;

        .header-avatar{
            height: 38px;
        }
    }
`;

const Header = ({ black }) => {
    return(
        <StyledHeader $black={black}>
            <img src="/images/aluraflixLogo.svg" alt="Logo AluraFlix" className="header-logo"/>
            <img src="/images/netflix-avatar.png" alt="Netflix Avatar" className="header-avatar"/>
        </StyledHeader>
    )
}

export default Header;