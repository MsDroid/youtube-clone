import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from "react";
import { format } from 'timeago.js';


const Container = styled.div``;

const Row = styled.div`
padding:5px;
display:flex;
gap:10px;
`;

const Image = styled.img`
width: 168px;
max-height:150px;
height:94px;
background-color:#ccc;
`;

const ChannelInfo = styled.div`
margin:0;
padding:0;

`;

const Title = styled.h2`
font-size:16px;
font-weight:400;
margin:0;
padding:0;

`;

const ChannelName = styled.p`
margin:0;
padding:0;
font-size:12px;
margin-top:10px;

color:#606060;
`;


const ChannelViews = styled.span`
color:#606060;
font-size:12px;
margin-right:10px;
`;

const Date = styled.span`
color:#606060;
font-size:12px;
`;

const Recommend = ({ tags }) => {

    const [videos, setVideos] = useState([]);
    // const [channel, setChannel] = useState({});

useEffect( () => {
    const recommendedVideo = async () => {
        try{
            const res = await axios.get(`http://localhost:8800/api/videos/tags?tags=${tags}`);
            // const channelRes = await axios.get(`http://localhost:8800/api/users/find/${res.data.userId}`);
            // console.log(res.data);
            // console.log(res.data.userId);
            // console.log(channelRes.data);

            // setChannel(channelRes.data);
            setVideos(res.data);
        }catch(err){

        }
      
    };
    recommendedVideo();
  },[tags]);

    return ( 
        <>
        {videos.map((video) => (
        <Container key = {video._id}>
            <Row>
                <Image src={video.imgUrl}/>
                <ChannelInfo>
                    <Title>{video.title}</Title>
                    <ChannelName>Krish</ChannelName>
                    <ChannelViews>{video.views} Views</ChannelViews>
                    <Date>{format(video.createdAt)}</Date>
                </ChannelInfo>
            </Row>
        </Container>    
            ))}
        </>
     );
}
 
export default Recommend;