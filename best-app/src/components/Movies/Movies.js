import { Link, NavLink } from "react-router-dom";
import App from "../../App";
import { WrapperMovies, HeaderNew, WrapperCards, Card, DecriptionCard, FireIconImg, Mask } from "./Movies.styles";
import cartoon from '../../assets/cartoon.svg'
import badman from '../../assets/badman.svg'
import fire from '../../assets/fire.png'
import girls from '../../assets/girls.svg'
import hollywood from '../../assets/hollywood.svg'
import { StyledNavLink } from "../Menu/Menu.styles";


export const Movies = () => {

  return (
    <>
      <App />
      <WrapperMovies>
        <HeaderNew>
          <FireIconImg src={fire} />
          Новинки
        </HeaderNew>
        <WrapperCards>

          <Card>
            <StyledNavLink to='/card'>
              <img src={cartoon} />
              <DecriptionCard>Мульт в кино. Выпуск №103. Некогда грустить!</DecriptionCard>
            </StyledNavLink>
          </Card>

          <Card>
            <StyledNavLink to='/card'>
              <img src={badman} />
              <DecriptionCard>Новый Бэтмен</DecriptionCard>
            </StyledNavLink>
          </Card>

          <Card>
            <StyledNavLink to='/card'>
              <img src={hollywood} />
              <DecriptionCard>Однажды... в Голливуде</DecriptionCard>
            </StyledNavLink>
          </Card>

          <Card>
            <StyledNavLink to='/card'>
              <img src={girls} />
              <DecriptionCard>Стриптизёрши</DecriptionCard>
            </StyledNavLink>
          </Card>

        </WrapperCards>
      </WrapperMovies>
    </>
  )
};
