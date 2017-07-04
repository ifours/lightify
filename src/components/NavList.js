import styled from 'styled-components';

const NavList = styled.ul`
  display: inline-block;
  float: right;

  @media only screen and (max-width: 500px) {
    display: inline-block;
    float: left;
    position: fixed;
    left: 59px;
  }
`;

export default NavList;
