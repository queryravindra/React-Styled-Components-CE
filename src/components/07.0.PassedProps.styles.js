import styled from 'styled-components';

export const PassedProps = styled.button`
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
  &:hover {
    background-color: ${(props) => props.variant !== 'outline' ? '#FFF' : '#4caf50'};
    color: ${(props) => props.variant !== 'outline' ? '#4caf50' : '#FFF'};
  }
`

export const SubmitButton = styled(PassedProps).attrs({
    type: 'submit'
})`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) => props.variant !== 'outline' ? '#FFF' : '#4caf50'};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`

// At the moment we are specifying an object,but it also accepts the function which receives the component props as argument

/**
 *  export const SubmitButton = styled(PassedProps).attrs((props) => ({
 *     type: 'submit',
 *   }))
 * 
 * you can set attribute values based on the props passed in to this component
 */