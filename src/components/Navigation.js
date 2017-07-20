import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationBar = styled.nav`
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  height: 66px;

  box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.08);
  background-color: rgba(255,255,255,.98);
  -webkit-backdrop-filter: blur(20px);
  padding: 2px 0px 0px 24px;

  @media only screen and (max-width: 500px) {
    padding: 0 0 0 10px;
    min-width: 320px;
  }
`;

export const NavigationList = styled.ul`
  display: inline-block;
  float: right;

  @media only screen and (max-width: 500px) {
    display: inline-block;
    float: left;
    position: fixed;
    left: 59px;
  }
`;

export const NavigationItemView = styled.li`
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
  margin: 0px 32px 0 0;
  color: #90949C;

  line-height: 62px;
  display: inline-block;
  vertical-align: top;

  cursor: pointer;

  &:hover {
    opacity: .7;
  }

  @media only screen and (max-width: 500px){
    margin: 0px 19px 0 0;
    display: inline-block;
  }
`;

export const NavigationItem = ({ to, children }) => (
  <Link to={to}>
    <NavigationItemView>{children}</NavigationItemView>
  </Link>
)

export const NavigationLogo = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/spotify.svg);
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: left center;
  padding: 0 0 0 42px;

  color: #90949C;
  font-weight: 200;
  font-size: 18px;

  line-height: 62px;
  display: inline-block;

  @media only screen and (max-width: 570px) {
    display: none;
  }
`;
