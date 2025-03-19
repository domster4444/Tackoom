import styled from 'styled-components';
import { Pin, Search, Command } from 'lucide-react';

const ExploreSection = () => {
  return (
    <Container>
      <ContainerBox>
        <LeftDivision data-aos="fade-right">
          <h4 className="manrope-bold heading-color">
            Empower Your Career with Expert Guidance
          </h4>

          <div className="list">
            <div className="listIconContainer">
              <span>
                <Pin />
              </span>
            </div>
            <div className="listInfo">
              <h6 className="manrope-semibold heading-color">
                Seamless Access to Counseling
              </h6>
              <p className="manrope-regular">
                Explore verified counselors and career advisors who specialize
                in helping Nepali students achieve their educational goals.
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
              <h6 className="manrope-semibold heading-color">
                Find the Right Scholarships
              </h6>
              <p className="manrope-regular">
                Gain insights into global scholarship opportunities and receive
                expert recommendations tailored to your aspirations.
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
              <h6 className="manrope-semibold heading-color">
                Simplified Career Planning
              </h6>
              <p className="manrope-regular">
                Connect with experienced mentors to navigate your academic and
                professional journey with confidence.
              </p>
            </div>
          </div>
        </LeftDivision>

        <RightDivision data-aos="fade-left">
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//q_auto,dpr_2.0,f_auto/brontes/for-talents/find-great-work@2x.jpg"
            alt=""
          />
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
`;

const RightDivision = styled.div`
  width: 40%;
  img {
    border-radius: 0.5rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const LeftDivision = styled.div`
  width: 60%;
  padding-left: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0rem;
    padding: 0 1.5rem;
  }

  h4 {
    font-size: 3.7rem;
  }
  .list {
    margin: 1rem 0rem;
    display: flex;
  }
  .listIconContainer {
    margin-top: 0.65rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    span {
      svg {
        height: 0.85rem;
        width: 0.85rem;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      padding: 0;
      padding: 0.25rem;
      border: 2px solid black;
    }
  }
  .listInfo {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    h6 {
      font-size: 1.6rem;
    }
    p {
      padding-right: 2.5rem;
      font-size: 0.9rem;
    }
  }
`;
