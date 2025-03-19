import { useState } from 'react';
import styled from 'styled-components';

import CompanyLogo from '../../assets/logo.png';

import { LogIn } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <NavBar>
        <Logo className="manrope-regular" href="#">
          <SiteLogo height={40} src={CompanyLogo} alt="logo" />
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu isOpen={isOpen}>
          <MenuLink className="manrope-semibold" href="#">
            For students
          </MenuLink>
          <MenuLink className="manrope-semibold" href="#">
            For experts
          </MenuLink>
          <MenuLink className="manrope-semibold" href="#bookacallpage">
            For Enterprise
          </MenuLink>
          <MenuLink className="manrope-semibold" href="#bookacallpage">
            Book a call
          </MenuLink>
        </Menu>
        <Menu isOpen={isOpen}>
          <MenuLink
            className="sign-in manrope-semibold"
            href="https://www.tackoom.com/login"
          >
            Sign in <LogIn />
          </MenuLink>
        </Menu>
      </NavBar>
    </Header>
  );
};

export default Nav;

const SiteLogo = styled.img`
  border-radius: 5rem;
`;

const Header = styled.header`
  width: 100%;
`;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 1rem;
  flex-wrap: wrap;
  margin-left: 50%;
  transform: translateX(-50%);
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #2196f3;
    margin: 4px 0;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 1;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
  .sign-in {
    background-color: black;
    color: white;
    border-radius: 0.5rem;
    &:hover {
      color: #dbe8ff;
    }
  }
`;

const MenuLink = styled.a`
  svg {
    height: 14px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #001e80;
  font-size: 0.8rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #1769aa;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const Logo = styled.a`
  color: #2196f3;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
`;
