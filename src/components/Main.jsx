import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../img/banner1.jpeg';
import ChannelImg from '../img/banner2.jpeg';

const Container = styled.div`
flex:7;
padding: 20px;
`;

const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
`;

const Card = styled.div`
width:25%;
margin-top:10px;
margin-bottom:20px;
`;

const Image = styled.img`

`;

const Details = styled.div`
display:flex;
gap:10px;
margin-top:5px;
`;

const ChannelImage = styled.img`
width:32px;
height:32px;
border-radius:100%;
`;

const Texts = styled.div`
margin-left:10px;
`;

const Title = styled.div`
font-size:18px;
font-weight:600px;
`;

const ChannelName = styled.div`
font-size:14px;
color:#726a6a;
`;

const Info = styled.div`
font-size:14px;
color:#726a6a;
`;

const Main = () => {
    return ( 
        <Container>
            <Wrapper>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            <Card>
            <Image src={Thumbnail}/>
            <Details>
                <ChannelImage src={ChannelImg}/>
                <Texts>
                    <Title>How to upload videos</Title>
                    <ChannelName>yt-tutorial</ChannelName>
                    <Info>Views • 255k</Info>
                </Texts>
            </Details>
            </Card>
            </Wrapper>
        </Container>
     );
}
 
export default Main;