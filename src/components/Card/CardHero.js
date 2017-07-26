import styled, { css } from 'styled-components';

export const CardHero = styled.div`
  ${props => props.src && css`
    background-image: url(${props.src});
  `}

  background-color: white;
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;

  width: 100%;
  height: 320px;
`;

export default CardHero;
