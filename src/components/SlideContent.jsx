import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function SlideContent() {
  const params = useParams();
  console.log('params', params);
  return (
    <StyledWrapper>
      <StyledTitle>
        <span>Slide: {params?.slideId}</span>
        {params?.slideId === '0' && <p>Slide content</p>}

        {params?.slideId === '1' && <p>Slide content</p>}

        {params?.slideId === '2' && <p>Slide content</p>}

        {params?.slideId === '3' && <p>Slide content</p>}
      </StyledTitle>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  background-color: #f0f0f0;
  color: #333;
  font-size: 2rem;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
