import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <BurgerIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerIcon>
      {isOpen && (
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
          {/* Add more menu items */}
        </Menu>
      )}
    </Wrapper>
  );
};

// Styled components for styling
const Wrapper = styled.div`
  /* Your styling here */
`;

const BurgerIcon = styled.div`
  /* Your styling for the burger icon */
`;

const Menu = styled.div`
  /* Your styling for the menu */
`;

const MenuItem = styled.a`
  /* Your styling for individual menu items */
`;

export default HamburgerMenu;