import { Link, NavLink } from "react-router-dom";
import { WrapperMovies, HeaderNew, WrapperCards, Card, DecriptionCard, FireIconImg, WrapperGenres, GenresBlock, HeaderGenres, Test, MainBlockOfCards } from "./Movies.styles";
import fire from '../../assets/fire.png';
import smile from '../../assets/smile.svg'
import cry from '../../assets/cry.svg'
import fantastic from '../../assets/fantastic.svg'
import horor from '../../assets/horor.svg'
import { StyledNavLink } from "../Menu/Menu.styles";
import { DivFooter, Footer, FooterText, ImgLogoFooter, LinkCss, WrapperOfFooter } from "../TV/Tv.styles";
import footerLogo from '../../assets/footerLogo.svg'
import { useState } from "react";
import JSONDATA from '../../MOCK_DATA.json';
import { LogoVideoService, SearchBox, SignVideoService, WrapperHeader } from "../Header/Header.styles";
import Logo from '../../assets/logo.svg'
import { Button } from "../Header/button/Button";
import { ButtonRegistration } from "../ButtonRegistration/ButtonRegistration";
import ModalWindow from "../modal/Modal";
import Menu from "../Menu/Menu";
import { SearchInput } from "../../components/Header/InputSearch/InputSearch.styles"



export const Movies = () => {
  const [active, setActive] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>

      <WrapperHeader>
        <LogoVideoService>
          <img src={Logo} alt="Logo" />
          <SignVideoService>Видеосервис</SignVideoService>
        </LogoVideoService>
        <SearchBox>
          <SearchInput type="text" id="btnSearch" placeholder='Поиск...' onChange={(event) => { setSearchTerm(event.target.value) }} />
          <Button />
        </SearchBox>
        <ButtonRegistration onClick={setActive.bind(null, !active)} />
        {active &&
          <ModalWindow onClick={setActive.bind(null, false)} />
        }
      </WrapperHeader >
      <Menu />


      <WrapperMovies>
        <HeaderNew>
          <FireIconImg src={fire} />
          Новинки
        </HeaderNew>
        <MainBlockOfCards>
          <WrapperCards>
            {JSONDATA.filter((val) => {
              if (searchTerm == '') {
                return val
              } else if (val.TitleMovie.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }

            }).map((val, key) => {
              return (
                <Card key={key}>

                  <li>
                    <StyledNavLink to={val.Path}>
                      <img src={require(`../../assets/${val.Photo}.svg`)} />
                    </StyledNavLink>
                    <div class="effect-to-right">
                      <p>{val.DescriptionP}</p>
                    </div>
                  </li>

                  <DecriptionCard>{val.TitleMovie}</DecriptionCard>
                </Card>
              )
            })
            }
          </WrapperCards>
        </MainBlockOfCards>
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
      </WrapperMovies >
      <Footer>
        <WrapperOfFooter>
          <ImgLogoFooter src={footerLogo} alt="" />
          <DivFooter>
            <FooterText>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</FooterText>
            <FooterText>+7 (3412) 93-88-61, 43-29-29</FooterText>
            <FooterText><LinkCss href="#">htc-cs.ru</LinkCss></FooterText>
          </DivFooter>
        </WrapperOfFooter>
      </Footer>
    </>
  )
};
