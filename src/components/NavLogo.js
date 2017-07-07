import styled from 'styled-components';

const NavLogo = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/spotify.svg);
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: left center;
  color: #90949C;
  float: left;
  padding: 0 0 0 42px;
  font-weight: 200;
  font-size: 18px;

  line-height: 62px;
  display: inline-block;
  vertical-align: top;

  background-color: transparent;

  margin-right: auto;


  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export default NavLogo;
