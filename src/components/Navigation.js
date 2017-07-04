import styled from 'styled-components';

const Navigation = styled.nav`
  position: fixed;
  height: 66px;

  box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.08);
  background-color: rgba(255,255,255,.98);
  -webkit-backdrop-filter: blur(20px);
  z-index: 9999;
  padding: 2px 0px 0px 24px;
  top: 0;
  width: 100%;

  @media only screen and (max-width: 500px) {
    padding: 0 0 0 10px;
    min-width: 320px;
  }
`;

export default Navigation;
