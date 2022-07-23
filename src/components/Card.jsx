import React, { useEffect } from 'react'
import styled from 'styled-components'
import Thumbnail from '../img/banner1.jpeg';
import ChannelImg from '../img/banner2.jpeg';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { useState } from 'react';
import axios from 'axios';

const Container = styled.div`
flex:7;
padding: 20px;
`;

const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
`;

// const Card = styled.div`
// width:25%;
// margin-top:10px;
// margin-bottom:20px;
// `;

const Image = styled.img`

`;

const Details = styled.div`
display:flex;
gap:5px;
margin-top:5px;
`;

const ChannelImage = styled.img`
width:32px;
height:32px;
border-radius:100%;
border:1px solid ${(theme) => theme.textSoft}
`;

const Texts = styled.div`
margin-left:10px;
`;

const Title = styled.div`
font-size:18px;
font-weight:600px;
`;

const ChannelName = styled.div`
font-size:12px;
color:${(theme) => theme.textSoft};
margin:5px 0;
`;

const Info = styled.div`
font-size:12px;
color:${(theme) => theme.textSoft};
`;

const Main = ({type,video}) => {

const [channel, setChannel] = useState([]);

  useEffect( () => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:8800/api/users/find/${video.userId}`);
    //   console.log(res.data);
      setChannel(res.data);
    };
    fetchVideos();
  },[]);

    return ( 
        <Link to={`/video/${video._id}`} style={{textDecoration:"none" , color:"inherit"}}>
        <Container>
            <Wrapper>
            {/* <Card> */}
            <Image src={video.imgUrl}/>
            <Details>
                <ChannelImage src={channel.img}/>
                <Texts>
                    <Title>{video.title}</Title>
                    <ChannelName>{channel.name}</ChannelName>
                    <Info>{video.views} Views • {format(video.createdAt)}</Info>
                </Texts>
            </Details>
            {/* </Card> */}
            </Wrapper>
        </Container>
        </Link>
     );
}
 
export default Main;