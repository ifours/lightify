import React from 'react';
import styled from 'styled-components';

import { textColor } from 'styles';

export const SocialList = styled.ul`
  margin: 30px auto;
  text-align: center;
`;

export const SocialLinkContainer = styled.a.attrs({
  href: props => props.src
})`
  color: ${textColor};
  text-decoration: none;
  display: inline-block;
  margin-right: 32px;
  line-height: 50px;

  &:hover {
    opacity: .7;
  }
`;


export const SocialLink = ({ children, icon: Icon, src }) => (
  <SocialLinkContainer src={src}>
    <Icon  color={textColor} style={{ marginTop: -3, marginRight: 5 }} />
    {children}
  </SocialLinkContainer>
);
