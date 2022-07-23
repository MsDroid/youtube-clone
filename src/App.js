import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import { darkTheme, lightTheme } from './utils/Theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home';
import { Video } from './pages/Video';
import { Explore } from './pages/Explore';
import { Subscriptions } from './pages/Subscriptions';
import { Signin } from './pages/Signin';
import { Shorts } from './pages/Shorts';


const Container = styled.div`
background-color: ${({theme}) => theme.bg};
color:${({theme}) => theme.text};
`;

const MainWrapper = styled.div`
display:flex;
background-color: ${({theme}) => theme.bg};
color:${({theme}) => theme.text};
`;


export default function App() {
  const [ darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <BrowserRouter>
      <NavBar/>
      <MainWrapper>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
          <Route path='/'>
              <Route index element={<Home type="random" />} />
              <Route path="/trend" element={<Home type="trend" />} />
              <Route path="/subscriptions" element={<Subscriptions type="sub" />} />
              <Route path="video">
                <Route path=':id' element={<Video/>}/>
              </Route>
              <Route path='explore' element={<Explore/>} />
              <Route path='shorts' element={<Shorts/>} />
              <Route path='subscriptions' element={<Subscriptions/>} />
              <Route path='signin' element={<Signin/>} />
              
          </Route>
        </Routes>
      </MainWrapper>
    </BrowserRouter>
    </Container>
    </ThemeProvider>
  )
}
