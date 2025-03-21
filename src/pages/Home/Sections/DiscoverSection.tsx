import styled from 'styled-components';
import { Pin, Search, Command } from 'lucide-react';
import Button from '../../../components/Button/Button';
import FramerBlock from '../../../components/FramerBlock/FramerBlock';

const DiscoverSection = () => {
  return (
    <Container>
      <ContainerBox>
        <LeftDivision data-aos="fade-right">
          {/* <img
            src="https://i.ibb.co/Kxy2nJqZ/discover-section-img.png"
            alt=""
          /> */}

          <FramerBlock />
        </LeftDivision>
        <RightDivision data-aos="fade-left">
          <h4 className="manrope-bold heading-color">
            Up your education journey, it’s easy
          </h4>

          <div className="list">
            <div className="listIconContainer">
              <Pin />
            </div>
            <div className="listInfo">
              <h6 className="manrope-semibold heading-color">
                No cost to join
              </h6>
              <p className="manrope-regular ">
                Register and explore scholarship opportunities, browse counselor
                profiles, or even book a free consultation.
              </p>
            </div>
          </div>
          <div className="list">
            <div className="listIconContainer">
              <Search />
            </div>
            <div className="listInfo">
              <h6 className="manrope-semibold heading-color">
                Find the best scholarships and counselors
              </h6>
              <p className="manrope-regular ">
                Register to access a range of scholarship options and get
                personalized guidance from expert counselors.
              </p>
            </div>
          </div>
          <div className="list">
            <div className="listIconContainer">
              <Command />
            </div>
            <div className="listInfo">
              <h6 className="manrope-semibold heading-color">
                Unlock your scholarship without financial stress
              </h6>
              <p className="manrope-regular ">
                Find the perfect scholarship and receive tailored advice from
                top counselors to help you succeed.
              </p>
            </div>
          </div>
          <div className="list">
            <div className="listIconContainer">
              <Pin />
            </div>
            <div className="listInfo">
              <h6 className="manrope-semibold heading-color">
                No cost to join
              </h6>
              <p className="manrope-regular ">
                Register and explore scholarship opportunities, browse counselor
                profiles, or even book a free consultation.
              </p>
            </div>
          </div>

          <div className="btn-container">
            <Button>Signup For Free</Button>
            <Button variant="ghost">Get Started</Button>
          </div>
        </RightDivision>
      </ContainerBox>
    </Container>
  );
};

export default DiscoverSection;

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
`;

const LeftDivision = styled.div`
  width: 40%;
  img {
    border-radius: 1rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const RightDivision = styled.div`
  width: 60%;
  padding-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0rem;
    padding: 1.5rem;
  }

  h4 {
    font-size: 2.7rem;
  }
  .list {
    margin: 1rem 0rem;
    display: flex;
  }
  .listIconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .listInfo {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    h6 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  .btn-container {
    display: flex;
    button {
      margin-right: 1rem;
    }
  }
`;
