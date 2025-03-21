import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0 1rem;
`;

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #2a2a2a;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 360px;
  border-radius: 12px;
  border: none;
  @media (min-width: 768px) {
    height: 450px;
  }
  @media (min-width: 1024px) {
    height: 540px;
  }
`;

const VideoSection = () => {
  return (
    <Container>
      <Wrapper>
        <Heading className="manrope-regular heading-color">
          <b>Glimpse at Tackoom</b>
        </Heading>
        <VideoWrapper>
          <StyledIframe
            src="https://www.youtube.com/embed/BkhaV46HM2E?si=7dzuKJL-AsfKHGM7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></StyledIframe>
        </VideoWrapper>
      </Wrapper>
    </Container>
  );
};

export default VideoSection;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
