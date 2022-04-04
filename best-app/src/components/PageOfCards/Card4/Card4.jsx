import Header from "../../Header/Header"
import { AboutMovie, BlockAboutMovie, BlockCategories, BlockNamesMovies, WrapperBlocks, ButtonBack, Comedy, CountryMovies, GenreMovie, ImgBlock, ImgIconArrow, NameMovie, SignCountry, SignOne, SpanSign, WrapperAbout, BlockOfComments, Comment, WrappersOfComments, InputBlock, InputComment, PublishBlock, PublishBtn, ImageArrow, MainWrapperComment, MyComment, YourComment, Li } from "../PageOfCards.styles"
import arrow from '../../../assets/arrow.svg'
import girls from '../../../assets/girls.svg'
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import footerLogo from '../../../assets/footerLogo.svg';
import { DivFooter, Footer, FooterText, ImgLogoFooter, LinkCss, WrapperOfFooter } from "../../TV/Tv.styles";
import { LogoVideoService, SearchBox, SignVideoService, WrapperHeader } from "../../Header/Header.styles";
import { SearchInput } from "../../Header/InputSearch/InputSearch.styles";
import { Button } from "../../Header/button/Button";
import { ButtonRegistration } from "../../ButtonRegistration/ButtonRegistration";
import ModalWindow from "../../modal/Modal";
import Logo from '../../../assets/logo.svg'


export const Card4 = () => {

  const [active, setActive] = useState(false);


  const refInput = React.createRef();
  const [comment, setComment] = useState([])

  function addComment() {
    const commentValue = refInput.current.value;
    const comments = [...comment, commentValue]
    setComment(comments)
    refInput.current.value = '';
  }

  let history = useNavigate();

  function handleClick() {
    history(-1);
  }


  return (
    <>
      <WrapperHeader>
        <LogoVideoService>
          <img src={Logo} alt="Logo" />
          <SignVideoService>Видеосервис</SignVideoService>
        </LogoVideoService>
        <SearchBox>
          <SearchInput type="text" placeholder='Поиск...' />
          <Button />
        </SearchBox>
        <ButtonRegistration onClick={setActive.bind(null, !active)} />
        {active &&
          <ModalWindow onClick={setActive.bind(null, false)} />
        }
      </WrapperHeader >
      <WrapperAbout>
        <ImgBlock>
          <ImageArrow src={arrow} alt="return back" onClick={handleClick} />
          <img src={girls} alt="girls" id="4" />
        </ImgBlock>


        <BlockAboutMovie>
          <WrapperBlocks>
            <BlockCategories>
              <NameMovie>Название:</NameMovie>
              <CountryMovies>Страна:</CountryMovies>
              <GenreMovie>Жанр:</GenreMovie>
            </BlockCategories>
            <BlockNamesMovies>
              <SignOne>Стриптизёрши</SignOne>
              <SignCountry>США</SignCountry>
              <Comedy>Криминал, драма</Comedy>
            </BlockNamesMovies>
          </WrapperBlocks>
          <AboutMovie> Бывшая стриптизёрша из Нью-Йорка Дестини даёт интервью журналистке Элизабет и рассказывает историю, в которой принимала участие её подруга и наставница Рамона Вега. Семь лет назад Дороти, известная под псевдонимом Дестини, устраивается на работу в стрип-клуб.</AboutMovie>
        </BlockAboutMovie>
      </WrapperAbout>
      <BlockOfComments>
        <Comment>Комментарии</Comment>
      </BlockOfComments>
      <MainWrapperComment>
        <WrappersOfComments>
          <InputBlock>
            <InputComment type="text" ref={refInput} placeholder='Введите комментарий...' />
          </InputBlock>
          <ul>
            {comment.map((item) => <YourComment>Анонимный комментарий:<MyComment>{item}</MyComment> </YourComment>)}
          </ul>
        </WrappersOfComments>
        <PublishBlock>
          <PublishBtn onClick={addComment}>Опубликовать</PublishBtn>
        </PublishBlock>
      </MainWrapperComment>
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