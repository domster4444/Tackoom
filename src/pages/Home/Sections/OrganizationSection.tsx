import styled from 'styled-components';
import { Pin, Search, Command } from 'lucide-react';

import Button from '../../../components/Button/Button';

const ExploreSection = () => {
  return (
    <Container>
      <ContainerBox data-aos="zoom-in">
        <LeftDivision>
          <h6 className="manrope-semibold">Enterprise Suite</h6>

          <h4 className="manrope-semibold">
            This is how good
            <br />
            <span>companies find company.</span>
          </h4>

          <p className="sub-heading manrope-semibold">
            Access the top 1% of talent on Upwork, and a full suite of hybrid
            workforce management tools. This is how innovation works now.
          </p>

          <div className="list">
            <div className="listIconContainer">
              <span>
                <Pin />
              </span>
            </div>
            <div className="listInfo">
              <p className="manrope-regular">
                Access expert talent to fill your skill gaps
              </p>
            </div>
          </div>
          <div className="list">
            <div className="listIconContainer">
              <span>
                <Search />
              </span>
            </div>
            <div className="listInfo">
              <p className="manrope-regular">
                Control your workflow: hire, classify and pay your talent
              </p>
            </div>
          </div>
          <div className="list">
            <div className="listIconContainer">
              <span>
                <Command />
              </span>
            </div>
            <div className="listInfo">
              <p className="manrope-regular">
                Partner with Upwork for end-to-end support
              </p>
            </div>
          </div>

          <Button variant="planewhite">Explore Consultancy</Button>
        </LeftDivision>

        <RightDivision>
          <img src="https://i.ibb.co/1fyCpCWS/enterprise-2023.webp" alt="" />
        </RightDivision>
      </ContainerBox>
    </Container>
  );
};

export default ExploreSection;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerBox = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2.25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 1rem;
  overflow: hidden;
`;

const RightDivision = styled.div`
  width: 40%;
  overflow: hidden;
  img {
    @media (max-width: 768px) {
      width: 100%;
    }
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const LeftDivision = styled.div`
  background-color: #133e72;
  width: 60%;
  padding: 2rem;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0rem;
    padding: 1.5rem;
  }
  h6 {
    font-size: 1rem;
  }

  h4 {
    margin-top: 1.5rem;
    line-height: 1.1;
    font-size: 3.2rem;
    span {
      color: #2774d9;
    }
  }
  p.sub-heading {
    margin: 1rem 0;
  }

  .list {
    margin: 0.2rem 0rem;
    display: flex;
  }
  .listIconContainer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    svg {
      margin-top: 0.25rem;
      opacity: 0.5;
      height: 0.85rem;
      width: 0.85rem;
    }
  }
  .listInfo {
    padding-left: 0.5rem;
    display: flex;
    flex-direction: column;
    p {
      font-size: 0.8rem;
    }
  }
`;
