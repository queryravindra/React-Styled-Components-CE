import { ThemeProvider, createGlobalStyle } from 'styled-components';
import logo from './logo.svg';
import './App.css';
import './styles.css';
// import { StyledComponent } from './components/03.StyledComponent'
// import { StyledCompUsingProps } from './components/04.StyledCompUsingProps'
import { StyledComponent } from './components/03.StyledComponent.styles';
import { FancyButton, StyledCompUsingProps } from './components/04.StyledCompUsingProps.styles';
import { PseudoClasses } from './components/06.PseudoClasses.styles';
import { SubmitButton } from './components/07.0.PassedProps.styles';
import { AnimatedLogo } from './components/08.Animations.styles';
import { DarkButton } from './components/09.Theme.styles';

// function App() {
//   return (
//     <div className="App">
//       {/* <button>Button</button> */}
//       {/* 03.Basic Styled Component */}
//         <StyledComponent>Styled Button</StyledComponent>
//         {/* for 7.Passed Props and Adding Attributes */}
//         <StyledComponent type='submit'>Styled Button</StyledComponent>
//       <div>
//         <br />
//       </div>
//       {/* 04.Using Props */}
//         <StyledCompUsingProps variant='outline'>Styled Button Using Props</StyledCompUsingProps>
//       <div>
//         <br />
//       </div>
//       {/* 05.Extending Styles */}
//         <FancyButton>Fancy Button</FancyButton>
//         <FancyButton as='a'>Fancy Button</FancyButton>
//       <div>
//         <br />
//       </div>
//       {/* 6.Pseudo Classes */}
//         <PseudoClasses>Pseudo Button</PseudoClasses>
//       <div>
//         <br />
//       </div>
//       {/* 7.0.Passed Props */}
//         <SubmitButton>Submit Button</SubmitButton>
//       {/* 8.Animations */}
//         {/* <img src={logo} className='App-logo' alt='logo' /> */}
//         <AnimatedLogo src={logo} />
//     </div>
//   );
// }

/*********************************************************************************** */

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  // for 10.GlobalStyles
  fontFamily: 'Segoe UI'
}

// const GlobalStyle = createGlobalStyle`
//   button {
//     font-family: 'Roboto'
//   }
// `

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily}
  }
`

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AnimatedLogo src={logo} />
        <div>
          <br />
        </div>
        <StyledComponent type='submit'>Styled Button</StyledComponent>
        <div>
          <br />
        </div>
        <StyledCompUsingProps variant='outline'>Styled Button Using Props</StyledCompUsingProps>
        <div>
          <br />
        </div>
        {/* <FancyButton>Fancy Button</FancyButton> */}
        <FancyButton as='a'>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <PseudoClasses>Pseudo Button</PseudoClasses>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        {/* 9.Theming */}
        <DarkButton>Dark Theme</DarkButton>
        {/* 10.Global Styles */}
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;


// 5.Extending Styles
/**
 * Another cool feature that styled component library offers is the ability to provide a polymorphic prop
 */