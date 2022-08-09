import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BiCut, BiListPlus } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { darkTheme, lightTheme } from '../utils/Theme';
import { videoSuccess, like, dislike, videoStart} from '../redux/videoSlice';
import { format } from 'timeago.js';
import Comments from '../components/Comments';
import Recommend from '../components/Recommend';
import { subscription } from '../redux/userSlice';


const Container = styled.div`
flex:7;
display:flex;padding:10px;
`;

const Content = styled.div`
flex:5;
padding:10px;
`;

const VideoWrapper = styled.div`

`;

const VideoFrame = styled.video`
width:100%;
max-height: 720px;
background-color: #ccc;
object-fit:cover;
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
color:#ccc;
margin-bottom:10px;
border:0.5px solid #ccc;
`;

const Channel = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;


const ChannelInfo = styled.div`
display:flex;
gap:10px;
align-items:center;
`;

const Image = styled.img`
width:52px;
height:52px;
background-color:#ccc;
border-radius:50%;

`;

const ChannelDetails = styled.div``;

const ChannelName = styled.h2`
font-size:14px;
margin:0;
`;


const ChannelCounter = styled.div`
font-size:12px;
font-weight:400;
color:#606060;
`;

const Description = styled.div`
font-size:14px;
font-weight:400;
margin-top:20px;
`;

const Subscribe = styled.button`
background-color:red;
font-size:16px;
cursor:pointer;
padding:10px 16px;
text-transform:uppercase;
letter-spacing:0.5px;
font-weight:500px;
border-radius:2px;
color:white;
border:none;
&:hover{
  border:1px solid #606060;
}
`;

const Comment = styled.div`
flex:7;
margin:30px 0px;

`;

const CommentWrapper = styled.div`
display:flex;
align-items:center;
`;

const CommentCount = styled.div`
color:#606060;
font-size:14px;
font-weight:400;
letter-space:1px;
margin-bottom:20px;
`;

const CommentInput = styled.input`
border:none;
width:100%;
border-bottom:1px solid #ccc;
padding:10px 16px;
margin-left:20px;
&:focus{
  boder:none;
  outline:1px solid #ccc;
}
`;


const CommentButton = styled.button`
padding:10px 16px;
margin-left:10px;
border:none;
cursor:pointer;
&:hover{
  border:1px solid #606060;
}
`;

const RTitle = styled.h3`
font-size : 16px;
color:#606060;
padding:5px;
`;




const Recommended = styled.div``;


export const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  const path = useLocation().pathname.split("/")[2];
  const [channel, setChannel] = useState({});
  const dispatch = useDispatch();

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`http://localhost:8800/api/videos/find/${path}`);
        const channelRes = await axios.get(
          `http://localhost:8800/api/users/find/${videoRes.data.userId}`
        );
        // console.log(videoRes.data);

        setChannel(channelRes.data);
        dispatch(videoSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);



  const handleLike = async () => {
    const token = currentUser.token;
    await axios.put(`http://localhost:8800/api/users/like/${currentVideo._id}`,{'access_token':token});
    dispatch(like(currentUser._id));
  };

  const handleDisLike = async () => {
    const token = currentUser.token;
        await axios.put(`http://localhost:8800/api/users/dislike/${currentVideo._id}`,{'access_token':token});
        dispatch(dislike(currentUser._id));
  }

  const handleSub = async () => {
    const token = currentUser.token;
    currentUser.subscribedUsers.includes(channel._id)
        ? await axios.put(`http://localhost:8800/api/users/unsub/${channel._id}`,{'access_token':token})
        : await axios.put(`http://localhost:8800/api/users/sub/${channel._id}`,{'access_token':token});
      dispatch(subscription(channel._id));
  }



  return (
    <Container>
        <Content>
          <VideoWrapper>
            <VideoFrame src={currentVideo?.videoUrl} controls >
              <source src={currentVideo?.videoUrl} type="video/mp4"/>
            </VideoFrame>
          </VideoWrapper>
          <Title>{currentVideo?.title}</Title>
          <Details>
            <Views>{currentVideo?.views} views {format(currentVideo?.createdAt)}</Views>
            <Buttons>
              <Button onClick={handleLike}><FiThumbsUp/>{currentVideo?.likes.length}</Button>
              <Button onClick={handleDisLike}><FiThumbsDown/>DISLIKE</Button>
              <Button><RiShareForwardLine/> SHARE</Button>
              <Button><BiCut/> CLIP</Button>
              <Button><BiListPlus/> SAVE</Button>
            </Buttons>
          </Details>
          <Hr/>

          <Channel>
          <ChannelInfo>
            <Image src={channel.img} />
            <ChannelDetails>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Description>{currentVideo?.desc}</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {currentUser?.subscribedUsers?.includes(channel._id)
              ? "UNSUBSCRIBE"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel>
        <Hr/>

        <Comment>
          <CommentCount>124 Comments</CommentCount>
          <CommentWrapper>
            <Image src={currentUser?.img}/>
            <CommentInput placeholder="Say Somthing..."/>
            <CommentButton>
              COMMENT
            </CommentButton>
          </CommentWrapper>
        </Comment>


              {/* component */}
        <Comments videoId = {currentVideo._id}/>
        {/* end component */}
        
        </Content>


        <Recommended>
          <RTitle>Recommended Videos</RTitle>
        
              <Recommend tags = {currentVideo.tags}/>
          
          
          
        </Recommended>
    </Container>
  )
}

