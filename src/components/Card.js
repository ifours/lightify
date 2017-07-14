import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
  display: inline-block;
  position: relative;
  ${'' /* width: 355px; */}
  width: 320px;
  background-color: white;
  vertical-align: top;
  text-align: left;
  height: 480px;
  margin: 20px;
  box-shadow: 0 20px 20px rgba(0,0,0,.08);
  white-space: normal;
  transition: all 250ms cubic-bezier(.02, .01, .47, 1);
  color: #4B4F56;

  ${props => !props.disabled && css`
    &:hover {
      box-shadow: 0 40px 40px rgba(0,0,0,.16);
      transform: translate(0,-20px);
      transition-delay: 0s !important;
    }
  `}

  @media only screen and (max-width: 500px) {
    width: 320px;
    height: auto;
    margin: 15px 0;
  }
`;

export const CardHero = styled.div`
  ${props => props.src && css`
    background-image: url(${props.src});
  `}

  background-color: white;
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
  clear: both;
  float: left;
  overflow: auto;
  width: 100%;
  padding: 20px;

  height: 320px;

  @media only screen and (max-width: 500px) {
    ${'' /* padding: 0 20px 20px 20px; */}
    height: 320px;
  }
`;

export const CardBody = styled.div`
  position: relative;
  clear: both;
  float: left;
  width: 100%;
  overflow: visible;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  z-index: 2;

  @media only screen and (max-width: 500px) {
    padding-bottom: 5px;
  }
`;

export const CardFooterView = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  position: absolute;
  padding-left: 20px;
  padding-right: 20px;
  bottom: 0px;
  margin: 0 auto;
  width: 100%;

  @media only screen and (max-width: 500px) {
    position: relative;
    display: inline-block;
    padding-top: 0px;
  }
`;

export const CardFooterWrapper = styled.div`
  width: 100%;
  max-width: 100%;

  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: row;
  display: flex;

  height: 46px;
  line-height: 46px;
  border-top: 1px solid #E9EBEE;
`;

export const CardFooter = ({ children }) => (
  <CardFooterView>
    <CardFooterWrapper>
      {children}
    </CardFooterWrapper>
  </CardFooterView>
);

export const CardFooterItem = styled.div`
  margin-right: 20px;
  display: inline-block;
  color: #90949C;

  ${props => props.main && css`
    color: #4B4F56;
  `}
`;

export const CardAvatar = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 100px;
  background-color: white;
  margin-bottom: 12px;

  display: inline-block;
  line-height: 66px;
  text-align: center;
  background-size: 48px 48px;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  ${props => props.src && css`
    background-image: url(${props.src});
  `}
`;

export default Card;
