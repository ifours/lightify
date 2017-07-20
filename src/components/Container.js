import styled from 'styled-components';

const Container = styled.div`
  max-width: 1185px;
  margin: 0 auto;

  @media only screen and (max-width: 1225px) {
  	max-width: 790px;
  }

  @media only screen and (max-width: 790px) {
    max-width: 395px;
  }

  @media only screen and (max-width: 500px) {
    max-width: 320px;
  }
`;

export default Container;
