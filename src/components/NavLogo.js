import styled from 'styled-components';

import { logoColor } from 'styles';

const NavLogo = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/spotify.svg);
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: left center;
  padding: 0 0 0 42px;

  color: ${logoColor};
  font-weight: 200;
  font-size: 18px;

  line-height: 62px;
  display: inline-block;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export default NavLogo;
