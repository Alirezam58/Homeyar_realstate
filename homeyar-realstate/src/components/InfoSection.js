import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const Section = styled.section`
width:100%;
height:100%;
padding:4rem 0rem;
`;

const Container = styled.div`
padding:3rem calc((100vw-1300px) /2);
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:800px;

@media screen and (max-width:768px){
    grid-template-columns:1fr;
}
`;

const ColumnLeft = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
direction:rtl;
paddng:1rem 1rem;
order:${({reverse}) =>(reverse ? '2' : '1')};
`;

const ColumnRight = styled.div`
padding:1rem 1rem;
order:${({reverse}) =>(reverse ? '1' : '2')};
display:flex;
align-items:center;
justify-content:center;

img{
    width:100%;
    height:100%;
    object-fit:cover;

    @media screen and (max-width:768px){
        width:50%;
        heigth:50%;
    }
}

@media screen and (max-width:768px){
    order:${({reverse}) =>(reverse ? '2' : '1')};
}
`;

function InfoSection({heading,paragraphOne,paragraphTwo,buttonLabel,reverse,image}) {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                   <h1>{heading}</h1> 
                   <p>{paragraphOne}</p>
                   <p>{paragraphTwo}</p>
                   <Button to='/Homes' primary='true'>{buttonLabel}</Button>          
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='ویلا' />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
