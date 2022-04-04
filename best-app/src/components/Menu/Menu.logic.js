import { useMemo } from "react";
import { Tv } from '../TV/Tv'
import { Movies } from "../Movies/Movies";
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