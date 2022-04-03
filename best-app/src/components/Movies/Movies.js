import { Link, NavLink } from "react-router-dom";
import App from "../../App";
import { WrapperMovies, HeaderNew, WrapperCards, Card, DecriptionCard, FireIconImg, WrapperGenres, GenresBlock, HeaderGenres, Test } from "./Movies.styles";
import cartoon from '../../assets/cartoon.svg'
import badman from '../../assets/badman.svg'
import fire from '../../assets/fire.png'
import girls from '../../assets/girls.svg'
import smile from '../../assets/smile.svg'
import cry from '../../assets/cry.svg'
import fantastic from '../../assets/fantastic.svg'
import horor from '../../assets/horor.svg'
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
            <StyledNavLink to='/card1'>
              <img src={cartoon} />
              <DecriptionCard>Мульт в кино. Выпуск №103. Некогда грустить!</DecriptionCard>
            </StyledNavLink>
          </Card>

          <Card>
            <StyledNavLink to='/card2'>
              <img src={badman} />
              <DecriptionCard>Новый Бэтмен</DecriptionCard>
            </StyledNavLink>
          </Card>

          <Card>
            <StyledNavLink to='/card3'>
              <img src={hollywood} />
              <DecriptionCard>Однажды... в Голливуде</DecriptionCard>
            </StyledNavLink>
          </Card>

          <Card>
            <StyledNavLink to='/card4'>
              <img src={girls} />
              <DecriptionCard>Стриптизёрши</DecriptionCard>
            </StyledNavLink>
          </Card>
        </WrapperCards>
        <HeaderGenres>
          Жанры
        </HeaderGenres>
        <WrapperGenres>
          <GenresBlock>
            <Test>
              <img src={smile} />
              <p>Комедии</p>
            </Test>
          </GenresBlock>
          <GenresBlock>
            <Test>
              <img src={cry} />
              <p>Драмы</p>
            </Test>
          </GenresBlock>
          <GenresBlock>
            <Test>
              <img src={fantastic} />
              <p>Фантастика</p>
            </Test>
          </GenresBlock>
          <GenresBlock>
            <Test>
              <img src={horor} />
              <p>Ужасы</p>
            </Test>
          </GenresBlock>
        </WrapperGenres>


      </WrapperMovies>
    </>
  )
};
