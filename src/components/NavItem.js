import styled from 'styled-components';

import { textColor } from 'styles';

const NavItem = styled.li`
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
  margin: 0px 32px 0 0;
  color: ${textColor};

  line-height: 62px;
  display: inline-block;
  vertical-align: top;

  cursor: pointer;

  &:hover {
    opacity: .7;
  }

  @media only screen and (max-width: 500px){
    margin: 0px 19px 0 0;
    display: inline-block;
  }
`;

export default NavItem;
