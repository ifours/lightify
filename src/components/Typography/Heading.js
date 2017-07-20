import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: ${props => props.bold ? '700' : '300'};;
  font-size: 45px;
  line-height: 53px;
  color: ${props => props.light ? '#90949C' : '#1D2129'};

  margin: 60px 0 16px 0;

  @media only screen and (max-width: 790px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 12px;
  }
`;

export default Heading;
