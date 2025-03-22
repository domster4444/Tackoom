import React from 'react';
import styled from 'styled-components';
import Intro from '../../../assets/introvdo.mp4'; // Video import

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0 1rem;
`;

const VideoWrapper = styled.div`
  min-width: 78%;

  @media (max-width: 768px) {
    min-width: 100% !important;
  }
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #2a2a2a;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 360px;
  border-radius: 12px;
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
          <StyledVideo controls>
            <source src={Intro} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
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
