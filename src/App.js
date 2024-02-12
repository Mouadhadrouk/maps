
import React from 'react';
import GoogleMapComponent from './components/GoogleMap';
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

function App() {
  return (
    <StyledContainer>
      <h1>Your Landing Page</h1>
      <GoogleMapComponent />
    </StyledContainer>
  );
}

export default App;

