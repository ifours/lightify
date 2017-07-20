import React from 'react';
import styled from 'styled-components';

const ContainerOuterView = styled.div`
  height: 100%;

  @media (min-width: 50em) {
    background-image: url(${process.env.PUBLIC_URL}/landing.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
  }
`;

export const ContainerInnerView = styled.div`
  height: 100%;
  padding: 25px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: linear-gradient(145deg, rgba(252,252,252,0.8), rgba(252,252,252,1));
`;

export const Container = ({ children }) => (
  <ContainerOuterView>
    <ContainerInnerView>
      {children}
    </ContainerInnerView>
  </ContainerOuterView>
);

export const Button = styled.button`
  border-width: 0;
  border-radius: 500px;

  text-transform: uppercase;
  color: #fff;
  font-size: 18px;
  line-height: 1.5;

  background-color: #2ebd59;

  padding: 12px 45px;

  &:hover {
    background-color: #1ed760;
  }
`;

export const Intro = styled.h3`
  font-size: 1rem;

  font-weight: 400;
  font-size: 16px;
  padding-bottom: 40px;
  line-height: 24px;

  font-style: normal;
  max-width: 90%;
  text-align: center;
  color: #90949C;
`;
