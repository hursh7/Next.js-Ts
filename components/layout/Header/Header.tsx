import React from 'react';
import styled from 'styled-components';

export default function Header() {
  const Menus = [
    { title: 'About' },
    { title: 'Skills' },
    { title: 'Project' },
    { title: 'Contact' },
  ];

  return (
    <GNB>
      <div>Jun .</div>
      <MenuConatainer>
        {Menus.map(menu => (
          <li key={menu.title}>{menu.title}</li>
        ))}
      </MenuConatainer>
    </GNB>
  );
}

const GNB = styled.header`
  position: fixed;
  top: 0px;
  height: 80px;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

const MenuConatainer = styled.ul`
  display: flex;

  & li {
    padding: 0 25px;
    font-size: 16px;
    font-weight: 500;
    color: MainGrey;
    transition: all 0.2s ease-in;
  }
`;
