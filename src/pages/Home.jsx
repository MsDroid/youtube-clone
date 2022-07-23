import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card';
import axios from 'axios';

const Container = styled.div`
flex:7;
display:flex;
flex-wrap : wrap;
align-item:center;
`;


export const Home = ({type}) => {

  const [videos, setVideos] = useState([]);

  useEffect( () => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:8800/api/videos/${type}`);
      // console.log(res.data);
      setVideos(res.data);
    };
    fetchVideos();
  },[]);
  
  
  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>

  )
}
