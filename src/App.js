import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { darkTheme, lightTheme } from './utils/Theme';

const MainWrapper = styled.div`
display:flex;
background-color: ${({theme}) => theme.bg};
color:${({theme}) => theme.text};
`;

const Container = styled.div``;

export default function App() {
  const [ darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <NavBar/>
      <MainWrapper>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main/>
      </MainWrapper>
    </Container>
    </ThemeProvider>
  )
}
