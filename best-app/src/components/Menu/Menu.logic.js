import { useMemo } from "react";
import { Movies } from "../Movies/Movies";
import { Tv } from '../TV/Tv'

const toogleMenu = {
  movies: Movies,
  tv: Tv

};

const MenuLogic = ({ page }) => {
  const TabPage = useMemo(
    () => toogleMenu?.[page] ?? toogleMenu.App, [page]
  );
  return <TabPage />;
};

export default MenuLogic;