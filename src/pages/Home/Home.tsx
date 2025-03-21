import styled from 'styled-components';

import HeroSection from './Sections/HeroSection';
import TestimonialSection from './Sections/TestimonialSection';
import CounsellorSection from './Sections/CounsellorSection';
import DiscoverSection from './Sections/DiscoverSection';
import ExploreSection from './Sections/ExploreSection';
import CategorySection from './Sections/CategorySection';
import OrganizationSection from './Sections/OrganizationSection';
import EnterpriseSection from './Sections/EnterpriseSection';
import Footer from '../../components/Footer';
import AiButton from '../../components/AiButton/AiButton';

interface SectionContainerProps {
  bgColor?: string;
  padding?: string;
  margin?: string;
}

const Home = () => {
  return (
    <main>
      {/* hero-section */}
      <HeroSection />

      {/* top counsellor section */}
      <SectionContainer bgColor="#ffffff" padding="20px 0px">
        <Section>
          <CounsellorSection
            title="Top Picks"
            imgProps="circular"
            type="ctoCard"
          />
        </Section>
      </SectionContainer>

      {/* CategorySection */}
      <SectionContainer bgColor="#ffffff" padding="20px 0px">
        <Section>
          <CategorySection title="Categories." />
        </Section>
      </SectionContainer>

      {/* Recommended counsellor section */}
      <SectionContainer bgColor="#ffffff" padding="20px 0px">
        <Section>
          <CounsellorSection
            title="Premium Picks"
            imgProps="full"
            type="profile"
          />
        </Section>
      </SectionContainer>
      {/* enterprise carousel */}
      <SectionContainer bgColor="#ffffff" padding="20px 0px">
        <Section>
          <EnterpriseSection
            title="Organizations"
            imgProps="full"
            type="profile"
          />
        </Section>
      </SectionContainer>

      {/*Organization Section */}
      <SectionContainer bgColor="#ffffff" padding="25px 0px">
        <OrganizationSection />
      </SectionContainer>

      {/* testimonial section */}
      <SectionContainer bgColor="#e0e8f5" padding="0px  0px 40px 0px">
        <Section>
          <SecondaryHeading className="manrope-extrabold heading-color">
            <center>The wall of love</center>
          </SecondaryHeading>
          <TestimonialSection />
        </Section>
      </SectionContainer>

      {/* Discover Section */}
      <SectionContainer bgColor="#ffffff" padding="25px 0px">
        <DiscoverSection />
      </SectionContainer>

      {/* ExploreSection */}
      <SectionContainer bgColor="#ffffff" padding="25px 0px">
        <ExploreSection />
      </SectionContainer>

      <AiButton />
    </main>
  );
};

export default Home;

// global
const SecondaryHeading = styled.h2`
  font-size: 2.15rem;
  margin: 1.5rem 0rem;
`;

const SectionContainer = styled.div<SectionContainerProps>`
  background: ${(props) => props.bgColor || '#ffffff'};
  padding: ${(props) => props.padding || '0px'};
  margin: ${(props) => props.margin || '0px'};
  overflow: hidden;
`;

const Section = styled.section`
  width: 1200px;
  margin-left: 50%;
  transform: translateX(-50%);
`;
