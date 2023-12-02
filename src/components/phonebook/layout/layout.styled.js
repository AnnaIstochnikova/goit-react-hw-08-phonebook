import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px;
  border-radius: 10px;
  &.active {
    background-color: orange;
  }
`;

export const LayoutStyled = styled.header`
  & > nav {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-bottom: 20px;
    padding-top: 20px;
  }
`;
