import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: center;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
`;

const HeaderImageContainer = styled.div`
  padding: 60px 40px;
  box-shadow: 0 20px 20px rgba(0,0,0,.08);
`;

export const HeaderImageView = styled.div`
  width: 300px;
  height: 300px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;

  transition: all 350ms cubic-bezier(.02, .01, .47, 1);

  background-image: ${props => `url(${props.src})`};
`;

export const HeaderImage = ({ src }) => (
  <HeaderImageContainer>
    <HeaderImageView src={src} />
  </HeaderImageContainer>
);

export const HeaderDetails = styled.div`
  flex-shrink: 1;
  flex-basis: auto;

  padding: 20px 0 20px 30px;
`;
