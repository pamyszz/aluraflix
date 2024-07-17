import styled from "styled-components";

const StyledRowButton = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    transition: all ease 0.5s;
    opacity: 0;
`;

const MovieRowButton = ({ icon, classname, onClick }) => {
    return(
        <StyledRowButton className={classname} onClick={onClick}>
            {icon}
        </StyledRowButton>
    )
}

export default MovieRowButton;