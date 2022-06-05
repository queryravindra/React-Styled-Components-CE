import styled from 'styled-components';

export const StyledCompUsingProps = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) => props.variant === 'outline' ? '#FFF' : '#4caf50'};
  color: ${(props) => props.variant === 'outline' ? '#4caf50' : '#FFF'};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`

// Styled compoents will automatically injects the component props as an argument

// 5.Extending Styles

export const FancyButton = styled(StyledCompUsingProps)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`