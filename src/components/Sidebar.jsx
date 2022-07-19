import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AiOutlineHome, AiOutlineCompass, AiOutlineClockCircle } from 'react-icons/ai';
import { BsCameraReels, BsGear, BsSun } from 'react-icons/bs';
import { MdOutlineVideoLibrary, MdOutlineVideoStable, MdOndemandVideo } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { darkTheme, lightTheme } from '../utils/Theme';


const Container = styled.div`
flex:1;
position: sticky;
top: 48px;
background-color: ${({theme}) => theme.bg};
color:${({theme}) => theme.text};
`;

const Wrapper = styled.div`
padding:5px;
border-right:0.5px solid #ccc;

`;

const Items = styled.div`
display:flex;
align-items:center;
gap:10px;
margin-left:20px;
font-size:16px;
padding:5px 10px;
font-weight:400;
color:${({theme}) => theme.text};
margin-bottom:10px;
margin:10px;
cursor:pointer;
&:hover{
    background-color:red;
    color:white;
}
`;


const Hr = styled.hr`
color:#ccc;
margin-bottom:10px;
border:0.5px solid ${({theme}) => theme.soft}
`;


const Title = styled.h3`
font-size:12px;
margin-left:20px;
// display:flex;
// flex-direction:column;
`;


const SigninBtn = styled.button`
font-size:14px;
border:1px solid #ccc;
padding:3px 7px;
&:hover{
    background-color:red;
    color:white;
}
`;

const Sidebar = ({darkMode, setDarkMode}) => {
    return ( 
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <Wrapper>
                    <Items>
                        <AiOutlineHome style={{fontSize:"20px"}}/>
                        Home
                    </Items>
                    <Items>
                        <AiOutlineCompass style={{fontSize:"20px"}}/>
                        Explore
                    </Items>
                    <Items>
                        <BsCameraReels style={{fontSize:"20px"}}/>
                        Shorts
                    </Items>
                    <Items>
                        <MdOutlineVideoLibrary style={{fontSize:"20px"}}/>
                        Subscriptions
                    </Items>
                    <Hr/>
                    <Title>
                        Please signin to unlock features.
                        <SigninBtn>
                            Sign in
                        </SigninBtn>
                    </Title>
                    <Hr/>
                    <Items>
                        <MdOutlineVideoStable style={{fontSize:"20px"}}/>
                        Library
                    </Items>
                    <Items>
                        <FaHistory style={{fontSize:"20px"}}/>
                        History
                    </Items>
                    <Items>
                        <MdOndemandVideo style={{fontSize:"20px"}}/>
                        Your videos
                    </Items>
                    <Items>
                        <AiOutlineClockCircle style={{fontSize:"20px"}}/>
                        Watch later
                    </Items>
                    <Hr/>
                    <Items>
                        <BsGear style={{fontSize:"20px"}}/>
                        Setting
                    </Items>
                    <Items onClick={() => setDarkMode(!darkMode)}>
                        <BsSun style={{fontSize:"20px"}}/>
                        LightMode
                    </Items>
                </Wrapper>
            </Container>
        </ThemeProvider>
     );
}
 
export default Sidebar;