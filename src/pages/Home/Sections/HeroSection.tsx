import React from 'react';
import styled from 'styled-components';

import Illustrator from '../../../assets/hero-illustrator.jpg';

import Button from '../../../components/Button/Button';

const HeroSection = () => {
  return (
    <>
      <HeroSectionMain>
        <ClipPathGradient className="gradient-animate"></ClipPathGradient>
        <Container>
          <Box>
            <LeftSection data-aos="fade-right">
              <Badge className="manrope-semibold">
                Sessions 2025  ·  May 6–8 · Register now
              </Badge>
              <h2 className=" manrope-extrabold heading-color">
                From selected advisors, find the best for you!
              </h2>
              <p className="manrope-regular">
                Tackoom is a student-centered digital counseling marketplace
                dedicated to guiding Nepali students in securing scholarships
                for higher education.Tackoom: Digital Counseling Marketplace,
                provides you with perfect solution for your career.
              </p>

              <ButtonContainer>
                <Button variant="ghost">Get Started</Button>

                <OnBoardForm action="">
                  <input
                    placeholder="Email Address"
                    className="manrope-regular"
                    type="text"
                  />
                  <Button>
                    Sign in
                    <RightArrowSvg />
                  </Button>
                </OnBoardForm>
              </ButtonContainer>
            </LeftSection>
            <RightSection>
              <img
                className="infinite-updown-animate"
                src={Illustrator}
                alt="hero section illustrator"
              />
            </RightSection>
          </Box>
        </Container>
      </HeroSectionMain>
    </>
  );
};

export default HeroSection;

const OnBoardForm = styled.form`
  display: flex;
  height: 2.7rem;
  input {
    font-size: 1rem;
    outline: none;
    padding: 0 0.5rem;
    color: grey;
    border: 1px solid #e3e3e3;
    border-top-left-radius: 0.35rem;
    border-bottom-left-radius: 0.35rem;
  }
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.35rem;
    border-bottom-right-radius: 0.35rem;

    margin: 0;
    height: 100%;
  }
`;

// hero-section
const ClipPathGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 0 52%, 100% 0);
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

// hero-section
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// hero-section
const Badge = styled.span`
  color: white;
  @media (max-width: 768px) {
    color: black;
  }
  padding: 0.3rem 0.6rem;
  font-size: 0.65rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

// hero-section
const HeroSectionMain = styled.div`
  @media (max-width: 1075px) {
    padding-top: 5rem;
  }
  background-color: #f0f4f9;
  display: flex;
  justify-content: center;
  padding-bottom: 1.5rem;
`;

// hero-section
const Container = styled.div`
  z-index: 9;
  width: 100%;
  max-width: 1160px;
  padding: 0 1rem;
`;

// hero-section
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// hero-section
const LeftSection = styled.div`
  padding-top: 1rem;
  flex: 1;
  h2 {
    line-height: 1;
    padding: 1rem 0rem;
    font-size: 4rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.9;
    color: #425466;
  }
`;

// hero-section
const RightSection = styled.div`
  margin-top: 3rem;
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    border-radius: 1rem;
    max-width: 100%;
    height: auto;
  }
`;

// hero-section
const RightArrowSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      width="800px"
      height="800px"
      viewBox="0 -6.5 38 38"
      version="1.1"
    >
      <title>right-arrow</title>
      <desc>Created with Sketch.</desc>
      <g
        id="icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="ui-gambling-website-lined-icnos-casinoshunter"
          transform="translate(-1511.000000, -158.000000)"
          fill="#ffffff"
          fill-rule="nonzero"
        >
          <g id="1" transform="translate(1350.000000, 120.000000)">
            <path
              d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
              id="right-arrow"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
