import React from 'react'
import styled from 'styled-components';
import youtube from '../img/logo.png';
import { AiOutlineMenu} from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BiVideoPlus, BiUserCircle } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';



const Container = styled.div`
box-shadow:0 0 2px 0px #ccc;
position: sticky;
top: 0;
z-index: 999;
background-color: ${({theme}) => theme.bg};
color:${({theme}) => theme.text};
`;

const Row = styled.div`
padding : 5px;
display : flex;
align-items : center;
justify-content :space-between;
`;

const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:600;
cursor:pointer;
`;

const LogoImg = styled.img`
width:32px;`
;

const Search = styled.div`
width:100%;
display:flex;
align-items:center;
padding:5px 20px;
gap:10px;
font-weight:600;
justify-content:center;
`;

const Input = styled.input`
width:50%;
padding:5px;
border:1px solid #ccc;
box-shodow:0 0 2px 4px #ccc;
font-size:14px;
background-color: ${({theme}) => theme.bg};
color:${({theme}) => theme.text};
`;

const BtnWrapper = styled.div`
display:flex;
font-size:16px;
font-weight:400;
align-items:center;
gap:10px;
cursor:pointer;
`;

const SigninBtn = styled.button`
display:flex;
align-items:center;
justify-content:center;
gap:5px;
padding:5px 10px;
font-size:12px;
width:100px;
cursor:pointer;
&:hover{
    color:white;
    background-color:red;
    border:none;
}
`;

const User = styled.div`
display: flex;
gap: 10px;
align-items: center;
`;

const Avatar = styled.img`
width:25px;
height:25px;
border-radius:50%;
background-color:#999;
`;


const userName = styled.h3`
font-size:18px`;  

const NavBar = () => {

    const {currentUser}  = useSelector((state) => state.user);

    return ( 
        <Container>
            <Row>
                <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                <Logo>
                    <AiOutlineMenu style={{marginRight:"10px"}}/>
                    <LogoImg src={youtube}/>
                    VLogo
                </Logo>
                </Link>
                <Search>
                    <Input
                    placeholder='Search...'
                    />
                    <BsSearch style={{cursor:"pointer"}}/>
                </Search>
                <BtnWrapper>
                    {currentUser ? (<User>
                    <BiVideoPlus style={{fontSize:"30px"}}/>
                    <Avatar src={currentUser.img} style={{fontSize:"18px"}}/>
                    <userName>
                    {currentUser.name}
                    </userName>
                    
                    </User> )
                    :<Link to="/signin" style={{color:"inherit", textDecoration:"none"}}>
                    <SigninBtn>
                        <BiUserCircle style={{fontSize:"16px"}}/>
                        SIGN IN
                    </SigninBtn>
                    </Link>}
                </BtnWrapper>
            </Row>
        </Container>
     );
}
 
export default NavBar;