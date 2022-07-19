import React from 'react'
import styled from 'styled-components';
import youtube from '../../img/logo.png';
import { AiOutlineMenu} from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BiVideoPlus, BiUserCircle } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';



const Container = styled.div`
box-shadow:0 0 2px 4px #ccc;
position: sticky;
top: 0;
z-index: 999;
background-color: white;
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
`;

const BtnWrapper = styled.div`
display:flex;
font-size:30px;
font-weight:600;
justify-content:center;
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
font-size:14px;
width:100px;
cursor:pointer;
&:hover{
    color:white;
    background-color:red;
    border:none;
}
`;

const NavBar = () => {
    return ( 
        <Container>
            <Row>
                <Logo>
                    <AiOutlineMenu style={{marginRight:"10px"}}/>
                    <LogoImg src={youtube}/>
                    YouTube
                </Logo>
                <Search>
                    <Input
                    placeholder='Search...'
                    />
                    <BsSearch style={{cursor:"pointer"}}/>
                </Search>
                <BtnWrapper>
                    <BiVideoPlus/>
                    <IoIosNotificationsOutline/>
                    <SigninBtn>
                        <BiUserCircle style={{fontSize:"16px"}}/>
                        SIGN IN
                    </SigninBtn>
                </BtnWrapper>
            </Row>
        </Container>
     );
}
 
export default NavBar;