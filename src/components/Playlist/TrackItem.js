import styled from 'styled-components';

export const TrackItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 20px 20px rgba(0,0,0,.08);
    transform: translate(0,-7px);
    transition-delay: 0s !important;
  }
`;

export default TrackItem;
