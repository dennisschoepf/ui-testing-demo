import * as React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ToggleDisplay = styled('div')<{ isVisible: boolean }>`
  margin-top: 2rem;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`;

const Button = styled.button`
  padding: 0.4rem 2rem 0.5rem;
  border: 2px solid white;
  background-color: #360028;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #360028;
  }
`;

export default () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <ToggleWrapper>
      <Button onClick={() => setIsVisible(!isVisible)}>Toggle</Button>
      <ToggleDisplay isVisible={isVisible}>123</ToggleDisplay>
    </ToggleWrapper>
  );
};
