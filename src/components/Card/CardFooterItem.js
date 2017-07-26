import styled from 'styled-components';

export const CardFooterItem = styled.div`
  display: inline-block;
  margin-right: 20px;

  color: ${props => props.main ? '#4B4F56' : '#90949C'};
`;

export default CardFooterItem;
