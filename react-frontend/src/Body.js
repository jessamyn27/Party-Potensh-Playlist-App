import React from 'react';
import lights from './lights.jpg';
import styled from 'styled-components';

const Body = styled.div`
  text-align: center;
  margin: auto;
  padding: 0 5px;
  background-image: url(${lights});
  background-size: cover;
  margin-left: auto;
  @media (min-width: 600px) {
    width: auto;
  }
`;

Body.displayName = 'Body';

export default Body;
