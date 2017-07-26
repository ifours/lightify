import React from 'react';
import styled from 'styled-components';

const CardFooterOuterView = styled.div`
  text-transform: uppercase;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 11px;

  @media only screen and (max-width: 500px) {
    position: relative;
    display: inline-block;
    padding-top: 0px;
  }
`;

const CardFooterInnerView = styled.div`
  height: 46px;
  line-height: 46px;
  border-top: 1px solid #E9EBEE;
`;

const CardFooter = ({ children }) => (
  <CardFooterOuterView>
    <CardFooterInnerView>
      {children}
    </CardFooterInnerView>
  </CardFooterOuterView>
);

export default CardFooter;
