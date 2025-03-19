import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const FooterContainer = styled.footer`
  margin-top: 3rem;
  background: #0952b3;
  color: #ffffff;
  padding: 3rem 20px 20px 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  img {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    height: 2rem;
  }
`;

const FooterSection = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 5px;
  text-decoration: underline;
  font-size: 0.85rem;
  margin-top: 1rem;
  color: rgb(133, 180, 240);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
`;

const MapContainer = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  width: 100%;
  height: 250px;
  background-color: white;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Description = styled.p`
  margin: 0.85rem 0rem;
  font-size: 0.8rem;
  color: rgb(133, 180, 240);
`;

const Copyright = styled.p`
  text-align: center;
  grid-column: 1 / -1;
  margin-top: 20px;
  font-size: 0.7rem;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer className="manrope-regular">
        <FooterSection>
          <img
            src="https://www.tackoom.com/static/media/logo_banner.8631a932dfa6e0519328.png"
            alt=""
          />
          <Description>
            Proprietary Disclosure: The contents, and trademarks of this website
            including brand theme, components, proprietary information ,
            algorithm and the application solely is belonging of Tackoom Digital
            Private Limited, a registered company under Government of Nepal ,
            Ministry of Industry and Commerce, 2078 BS. Any violation through
            unauthorized personnel shall not be pertained.
            <br />
            <br />
            New Baneshwor, Kathmandu, Nepal
            <br />
            marketing@tackoom.com | 974-1805012
          </Description>
          <SocialIcons>
            <SocialIcon href="#" target="_blank">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
              <Linkedin />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>

        <FooterSection>
          <MenuList>
            <MenuItem>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>
                Sign in
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>
                Book a call
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>
                For Students
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>
                For Experts
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>
                For Business
              </a>
            </MenuItem>
          </MenuList>
        </FooterSection>

        <FooterSection>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7101642440402!2d85.34250447554017!3d27.69535157618946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1981e801c0a1%3A0x4590eeafaffc14f0!2sTackoom!5e0!3m2!1sen!2snp!4v1742368722785!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{
                border: '0',
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
        </FooterSection>

        <Copyright>
          © {new Date().getFullYear()} Tackoom Digital Private Limited. All
          rights reserved.
        </Copyright>
      </FooterContainer>
    </>
  );
};

export default Footer;
