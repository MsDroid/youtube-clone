import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BiCut, BiListPlus } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { darkTheme, lightTheme } from '../utils/Theme';

const Container = styled.div`
flex:7;
display:flex;padding:10px;
`;

const Content = styled.div`
flex:5;
padding:10px;
`;

const Title = styled.h1`
font-size:18px;
font-weight:400;
margin:10px 0;
color:${({ theme }) => theme.text}
`;


const Details = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;

const Views = styled.p`
font-size:12px;

`;

const Buttons = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
gap:10px`

const Button = styled.button`
background-color: transparent;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 14px;
    cursor:pointer;
`;

const Hr = styled.hr`
color:${({theme})=>theme.soft};
margin-bottom:10px;
border:0.5px solid ${({theme}) => theme.soft}
`;

const ChannelInfo = styled.div`
display:flex;
align-item:center;
justify-content:space-between;
`;

const Avatar = styled.img``;

const ChannelName = styled.h2``;

const SubscriberCount = styled.p``;

const Subscribe = styled.button``;


const Recommended = styled.div`flex:2`;


export const Video = () => {

  const path = useLocation().pathname.split("/")[2];
  console.log(path);

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`http://localhost:8800/api/videos/find/${path}`);
        const channelRes = await axios.get(
          `http://localhost:8800/api/users/find/${videoRes.data.userId}`
        );

        console.log(videoRes.data);
        console.log(channelRes.data);
        setChannel(channelRes.data);
        // dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path]);

  return (
    <Container>
        <Content>
          <iframe width="853" height="480" src={channel.videoUrl} title="Ik Mulaqaat - Dream Girl | Ayushmann Khurrana, Nushrat Bharucha | Meet Bros Ft. Altamash F & Palak M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Title>New Punjabi songs comes</Title>
          <Details>
            <Views>308,866,616 viewsSep 3, 2019</Views>
            <Buttons>
              <Button><FiThumbsUp/>1.8M</Button>
              <Button><FiThumbsDown/>DISLIKE</Button>
              <Button><RiShareForwardLine/> SHARE</Button>
              <Button><BiCut/> CLIP</Button>
              <Button><BiListPlus/> SAVE</Button>
            </Buttons>
          </Details>
          <Hr/>

          <ChannelInfo>
            <Avatar src=''></Avatar>
          </ChannelInfo>
        </Content>
        <Recommended>Recomended</Recommended>
    </Container>
  )
}
