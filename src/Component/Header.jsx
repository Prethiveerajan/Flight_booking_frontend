import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: blue;
  color:black;

  text-align: center;
`;

const HeaderTitle = styled.h1`
    font-size : 3rem;

    margin:0;

`

export default function Header() {
  return (
    <HeaderContainer>
     <HeaderTitle>Ticket Booking App</HeaderTitle>
    </HeaderContainer>
  );
}
