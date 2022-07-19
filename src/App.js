import React from 'react';
import styled from 'styled-components';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const MainWrapper = styled.div`
display:flex;
`;

export default function App() {
  return (
    <div>
      <NavBar/>
      <MainWrapper>
        <Sidebar/>
        <Main/>
      </MainWrapper>
    </div>
  )
}
