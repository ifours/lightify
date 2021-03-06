import styled from 'styled-components';

const Header = styled.header`
  max-width: 1185px;

  margin: 0 auto 36px auto;
  padding-left: 20px;

  @media only screen and (max-width: 1225px) {
    max-width: 790px;
  }

  @media only screen and (max-width: 790px) {
    max-width: 395px;
    padding: 0;
    margin-bottom: 32px;
    margin-top: 52px;
    text-align: center;
    width: 80%;
  }
`;

export default Header;
