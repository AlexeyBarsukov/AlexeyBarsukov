import { Link, NavLink, Outlet, Route, Router, Routes } from "react-router-dom";
import { Tv } from "../TV/Tv";
import MenuLogic from "./Menu.logic";
import { BlockOfMenu, Genres, MoviesStyle, StyledNavLink, TvShows } from "./Menu.styles";
import { Movies } from "../Movies/Movies";

function Menu() {
  return (
    <BlockOfMenu>
      <Genres>
        <MoviesStyle>
          <StyledNavLink to="/movies">Фильмы</StyledNavLink>
        </MoviesStyle>
        <TvShows>
          <StyledNavLink to="/tv">Телеканалы</StyledNavLink>
        </TvShows>
      </Genres>
    </BlockOfMenu >
  )
};

export default Menu;