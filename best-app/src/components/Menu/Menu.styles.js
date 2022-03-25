import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const BlockOfMenu = styled.div`
  display: flex;
  justify-content: center;
`

export const MoviesStyle = styled.h4`
  font-family: Sans-serif;
  font-weight: 500 medium;
  font-size: 28px;
`

export const TvShows = styled.h4`
font-family: Sans-serif;
  font-weight: 500 medium;
  font-size: 28px;
`
export const Genres = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: #333;
  position: relative;

  &.active {
    color: #E5261E;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -9px;
      width: 100%;
      height: 2px;
      background-color: #E5261E;
    }
  }

  }
`