import styled, { css } from 'styled-components';

const Card = styled.div`
  height: 480px;
  width: 320px;
  display: inline-block;
  position: relative;

  margin: 20px;
  background-color: white;
  box-shadow: 0 20px 20px rgba(0,0,0,.08);

  transition: all 250ms cubic-bezier(.02, .01, .47, 1);

  ${props => !props.disabled && css`
    &:hover {
      box-shadow: 0 40px 40px rgba(0,0,0,.16);
      transform: translate(0,-20px);
      transition-delay: 0s !important;
    }
  `}

  @media only screen and (max-width: 500px) {
    width: 320px;
    height: auto;
    margin: 15px 0;
  }
`;

export default Card;
