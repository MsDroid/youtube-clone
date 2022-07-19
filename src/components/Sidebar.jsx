import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineCompass, AiOutlineClockCircle } from 'react-icons/ai';
import { BsCameraReels, BsGear } from 'react-icons/bs';
import { MdOutlineVideoLibrary, MdOutlineVideoStable, MdOndemandVideo } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';


const Container = styled.div`
flex:1;
position: sticky;
top: 48px;
background-color: white;

`;

const Wrapper = styled.div`
padding:5px;

box-shadow: -1px 0px 2px 1px #ccc;
`;

const Items = styled.div`
display:flex;
align-items:center;
gap:10px;
margin-left:20px;
font-size:16px;
padding:5px 10px;
font-weight:400;
color:black;
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
height:1px;
margin-bottom:10px;

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

const Sidebar = () => {
    return ( 
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
            <Items>
                <AiOutlineHome style={{fontSize:"20px"}}/>
                Theme
            </Items>
        </Wrapper>
      </Container>
     );
}
 
export default Sidebar;