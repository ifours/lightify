import React from 'react';
import styled from 'styled-components';

const ContainerOuterView = styled.div`
  overflow: hidden;
  background: linear-gradient(145deg, #ffc867, #f037a6);
`;

// #ECE9E6, #FFFFFF)
// abbaab
export const ContainerInnerView = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.25rem 2.5vw;

  text-align: center;

  @media (min-width: 50em) {
    background-image: url(${process.env.PUBLIC_URL}/landing-graphic.png);;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
  }
`;

export const Container = ({ children }) => (
  <ContainerOuterView>
    <ContainerInnerView>
      {children}
    </ContainerInnerView>
  </ContainerOuterView>
);

export const Brand = styled.h3`
  font-weight: 500;
  font-size: 1.125rem;
  color: #1e3264;
  margin: 0 0 -.625rem;
  letter-spacing: .0625rem;
  font-size: 1.75rem;
`;

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
  margin-top: -.3125rem;
  padding-bottom: 40px;
  line-height: 24px;

  font-style: normal;
  max-width: 90%;
  text-align: center;
  color: #1e3264;
`;

export default Container;
