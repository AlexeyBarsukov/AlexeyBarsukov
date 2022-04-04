import { LogoVideoService, SearchBox, SignVideoService, WrapperHeader } from "../../Header/Header.styles"
import { AboutMovie, BlockAboutMovie, BlockCategories, BlockNamesMovies, WrapperBlocks, WrapperAbout, Comedy, CountryMovies, GenreMovie, ImgBlock, NameMovie, SignCountry, SignOne, BlockOfComments, Comment, CommentsBlock, PublishBlock, WrappersOfComments, InputComment, InputBlock, PublishBtn, ImageArrow, MyComment, WrapperMyComment, MainWrapperComment, YourComment, Li } from "../PageOfCards.styles"
import arrow from '../../../assets/arrow.svg'
import cartoon from '../../../assets/cartoon.svg'
import React, { createElement, useEffect, useState } from "react";
import { DivFooter, Footer, FooterText, ImgLogoFooter, LinkCss, WrapperOfFooter } from "../../TV/Tv.styles";
import footerLogo from '../../../assets/footerLogo.svg';
import { useNavigate } from "react-router";
import { SearchInput } from "../../Header/InputSearch/InputSearch.styles";
import { Button } from "../../Header/button/Button";
import { ButtonRegistration } from "../../ButtonRegistration/ButtonRegistration";
import Logo from '../../../assets/logo.svg'
import ModalWindow from "../../modal/Modal";



function Card1() {

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
        <ImgBlock >
          <ImageArrow src={arrow} alt="return back" onClick={handleClick} />
          <img src={cartoon} alt="cartoon" id='1' />
        </ImgBlock>


        <BlockAboutMovie>
          <WrapperBlocks>
            <BlockCategories>
              <NameMovie>Название:</NameMovie>
              <CountryMovies>Страна:</CountryMovies>
              <GenreMovie>Жанр:</GenreMovie>
            </BlockCategories>
            <BlockNamesMovies>
              <SignOne>Мульт в кино. Выпуск №103. Некогда грустить!</SignOne>
              <SignCountry>Россия</SignCountry>
              <Comedy>Детский, мультфильм</Comedy>
            </BlockNamesMovies>
          </WrapperBlocks>
          <AboutMovie>В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша научит завязывать шнурки.</AboutMovie>
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

export default Card1;