import styled from 'styled-components';
import { Flower } from 'lucide-react';
import { useState } from 'react';
import Modal from 'react-modal';
import { useRef } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AiButton = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Button className="manrope-semibold shadow" onClick={openModal}>
        <Flower color="white" />
        <span>Ai Chat</span>
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h1 className="manrope-regular">Modal For AI CHAT BOX</h1>
      </Modal>
    </>
  );
};

export default AiButton;

const Button = styled.button`
  z-index: 9;
  position: sticky;
  bottom: 1rem;
  left: 50%;
  cursor: pointer;
  background-color: #0952b3;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  color: white;
  padding: 0.25rem 0.55rem;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  transition: all 0.5s ease-in-out;
  svg {
    height: 1rem;
    animation: rotateInfinite 2s linear infinite;
    margin-right: 4px;
  }
  &:hover {
    color: black;
    background-color: white;
    border: 2px solid #0952b3;
    transition: all 0.5s ease-in-out;
    svg {
      transition: all 0.5s ease-in-out;
      transform: scale(1.4) rotate(360deg);
      fill: black;
      animation: rotateInfinite 2s linear infinite;
    }
  }

  &:active {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }

  @keyframes rotateInfinite {
    0% {
      transform: scale(1.4) rotate(0deg);
    }
    100% {
      transform: scale(1.4) rotate(360deg);
    }
  }
`;
