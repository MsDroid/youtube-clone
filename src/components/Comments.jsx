import React from 'react'
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``;

const Row = styled.div`
`;



const Comments = () => {
    return ( 
        <Container>
            <Row>
                <Comment/>
                <Comment/>
                <Comment/>
            </Row>
        </Container>

     );
     
}


 
export default Comments

;