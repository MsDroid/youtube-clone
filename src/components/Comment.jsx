import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { VscReply } from 'react-icons/vsc';
import axios from 'axios';

const Container = styled.div`
display:flex;
margin-top:35px;
`;


const CommentWrapper = styled.div`
margin-left:20px;
`;

const Image = styled.img`
width:52px;
height:52px;
border-radius:50%;
background-color:#ccc;
`;

const UserName = styled.span`
font-size:14px;
font-weight:400;
`;

const CommentDate = styled.span`
margin-left:20px;
font-size:10px;
color:#606060;
`;

const Text = styled.p`
font-size:12px;
color:#606060;
`;


const Like = styled.span`
font-size:12px;
color:#606060;
margin-right:20px;
`;

const DisLike = styled.span`
font-size:12px;
color:#606060;
margin-right:20px;
`;

const Reply = styled.span`
font-size:12px;
color:#606060;`;

const Buttons = styled.div``;


const Comment = ({videoId}) => {
    const { currentUser } = useSelector((state) => state.user );
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
    const fetchComments = async () => {
        const token = currentUser.token;
      try {
        const res = await axios.get(`http://localhost:8800/api/comments/${videoId}`, {'access_token' : token});
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

    return ( 
        <>
        {comments.map((comment) => (
        <Container>
        <Image src= {currentUser?.img}/>
        <CommentWrapper>
        <UserName>user 1</UserName>
        <CommentDate>1 day ago</CommentDate>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maiores architecto sunt. Accusamus aspernatur placeat tempore numquam nobis modi rerum.</Text>
        <Buttons>
            <Like><AiOutlineLike/> 1</Like>
            <DisLike><BiDislike/> 4</DisLike>
            <Reply>Reply <VscReply/></Reply>
        </Buttons>
        </CommentWrapper>
        </Container>
        ))}
        </>
     );
}
 
export default Comment;