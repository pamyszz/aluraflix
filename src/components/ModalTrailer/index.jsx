import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: ${props => (props.$show ? 'flex' : 'none')};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);

  @media (max-height: 550px) {
    z-index: 1000;
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;

  h2{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 25px;
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
`;

const ModalTrailer = ({ show, onClose, videoKey }) => {
  return (
    <StyledModal $show={show}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {videoKey ? (
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
          ></iframe>
        ) : (
          <h2>Trailer não encontrado.</h2>
        )}
      </ModalContent>
    </StyledModal>
  );
};

export default ModalTrailer;
