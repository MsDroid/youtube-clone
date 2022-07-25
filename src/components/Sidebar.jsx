import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { AiOutlineHome, AiOutlineCompass, AiOutlineClockCircle } from 'react-icons/ai';
import { BsCameraReels, BsGear, BsSun } from 'react-icons/bs';
import { MdOutlineVideoLibrary, MdOutlineVideoStable, MdOndemandVideo } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { darkTheme, lightTheme } from '../utils/Theme';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/userSlice';


const Container = styled.div`
flex:1;
position: sticky;
top: 48px;
background-color: ${({theme}) => theme.bg};
color:${({theme}) => theme.text};
height:100vh;
`;

const Wrapper = styled.div`
padding:5px;
border-right:0.2px solid #ccc;

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

    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logOut());
    }

    return ( 
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <Wrapper>
                    <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                    <Items>
                        <AiOutlineHome style={{fontSize:"20px"}}/>
                        Home
                    </Items>
                    </Link>

                    <Link to="/trend" style={{color:"inherit", textDecoration:"none"}}>

                    <Items>
                        <AiOutlineCompass style={{fontSize:"20px"}}/>
                        Trend
                    </Items>
                    </Link>

                    <Link to="/shorts" style={{color:"inherit", textDecoration:"none"}}>
                    <Items>
                        <BsCameraReels style={{fontSize:"20px"}}/>
                        Shorts
                    </Items>
                    </Link>

                    <Link to="/subscriptions" style={{color:"inherit", textDecoration:"none"}}>
                    <Items>
                        <MdOutlineVideoLibrary style={{fontSize:"20px"}}/>
                        Subscriptions
                    </Items>
                    </Link>

                    <Hr/>
                    { !currentUser &&
                    <>
                    <Title>
                        Please signin to unlock features.
                        <Link to="/signin" style={{color:"inherit", textDecoration:"none"}}>
                        <SigninBtn>
                            Sign in
                        </SigninBtn>
                        </Link>
                    </Title>
                    <Hr/>
                    </>
                    }
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
                    {/* <Items onClick={() => setDarkMode(!darkMode)}>
                        <BsSun style={{fontSize:"20px"}}/>
                        Dark Mode
                    </Items> */}
                    {currentUser && <Items onClick={handleLogout}>
                        <FiLogOut style={{fontSize:"20px"}}/>
                        Logout
                    </Items>}
                </Wrapper>
            </Container>
        </ThemeProvider>
     );
}
 
export default Sidebar;