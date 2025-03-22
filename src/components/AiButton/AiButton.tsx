//@ts-nocheck
import styled from 'styled-components';
import { Flower } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import ReactMarkdown from 'react-markdown';

import AILogo from '../../assets/ai-logo.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '600px',
    padding: '20px',
  },
};

Modal.setAppElement('#root');

const AiButton = () => {
  const messagesEndRef = useRef(null);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const subtitleRef = useRef(null);
  const apiKey = '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'; // Replace with your actual API key
  const apiUrl = 'https://api.perplexity.ai/chat/completions';

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#0952b3';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-large-128k-online',
          messages: [
            { role: 'user', content: input + '(give answer in max 4 lines)' },
          ],
        }),
      });
      const data = await response.json();
      const formattedResponse = data.choices[0].message.content.replace(
        /\[\d+\]/g,
        ''
      );
      setMessages([
        ...newMessages,
        { sender: 'ai', content: formattedResponse },
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <Button onClick={openModal}>
        <Flower color="white" />
        <span>Ai Chat</span>
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ChatHeader ref={subtitleRef} className="manrope-bold">
          <img src={AILogo} alt="ai logo" height={30} />
          Tackoom AI
        </ChatHeader>
        <ChatContainer className="manrope-regular">
          <MessageContainer>
            {messages.length === 0 && !loading && (
              <PlaceholderMessage>
                Ready to explore? Ask AI anything and get instant answers! 🚀
              </PlaceholderMessage>
            )}
            {messages.map((msg, index) => (
              <Message
                key={index}
                className={msg.sender === 'user' ? 'user' : 'ai'}
              >
                {msg.sender === 'ai' ? (
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                ) : (
                  msg.content
                )}
              </Message>
            ))}
            {loading && (
              <LoadingIndicator>Loading response...</LoadingIndicator>
            )}
            <div ref={messagesEndRef} />
          </MessageContainer>
          <InputContainer>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </InputContainer>
        </ChatContainer>
      </Modal>
    </>
  );
};

export default AiButton;

const ChatHeader = styled.h3`
  display: flex;
  align-items: center;
  color: #0952b3 !important;
`;
const PlaceholderMessage = styled.p`
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0;
  padding: 15px;
  background: linear-gradient(165deg, #0952b3, #b1e2ff);
  border-radius: 0.35rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  max-width: 80%;
  margin: auto;
  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Button = styled.button`
  position: sticky;
  bottom: 1rem;
  margin: auto;
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

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
`;

const MessageContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  max-width: 70%;
  font-size: 0.85rem;
  word-wrap: break-word;
  /* display: flex; */
  align-items: center;
  background-color: ${({ className }) =>
    className === 'user' ? '#e0e0e0' : '#0952b3'};
  color: ${({ className }) => (className === 'user' ? 'black' : 'white')};
  align-self: ${({ className }) =>
    className === 'user' ? 'flex-end' : 'flex-start'};
`;

const LoadingIndicator = styled.div`
  padding: 10px;
  color: gray;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;

  input {
    outline: none;
    flex-grow: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  button {
    padding: 10px;
    margin-left: 5px;
    background-color: #0952b3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
