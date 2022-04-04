import Header from "../../Header/Header"
import { AboutMovie, BlockAboutMovie, BlockCategories, BlockNamesMovies, WrapperBlocks, ButtonBack, Comedy, CountryMovies, GenreMovie, ImgBlock, ImgIconArrow, NameMovie, SignCountry, SignOne, SpanSign, WrapperAbout, BlockOfComments, Comment, WrappersOfComments, InputBlock, InputComment, PublishBlock, PublishBtn, ImageArrow, MainWrapperComment, MyComment, YourComment, Li } from "../PageOfCards.styles"
import arrow from '../../../assets/arrow.svg'
import badman from '../../../assets/badman.svg'
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import footerLogo from '../../../assets/footerLogo.svg';
import { DivFooter, Footer, FooterText, ImgLogoFooter, LinkCss, WrapperOfFooter } from "../../TV/Tv.styles"


export const Card2 = () => {
  // let navigate = useNavigate();
  // navigate('/movies')

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
      <Header />
      <WrapperAbout>
        <ImgBlock>
          <ImageArrow src={arrow} alt="return back" onClick={handleClick} />
          <img src={badman} alt="badman" id='2' />
        </ImgBlock>


        <BlockAboutMovie>
          <WrapperBlocks>
            <BlockCategories>
              <NameMovie>Название:</NameMovie>
              <CountryMovies>Страна:</CountryMovies>
              <GenreMovie>Жанр:</GenreMovie>
            </BlockCategories>
            <BlockNamesMovies>
              <SignOne>Новый Бэтмен</SignOne>
              <SignCountry>США, Германия</SignCountry>
              <Comedy>Комедия</Comedy>
            </BlockNamesMovies>
          </WrapperBlocks>
          <AboutMovie> Бэтмен второй год борется с преступностью и пытается раскрыть причины коррупции Готэма. Также герой сталкивается с Загадочником, серийным убийцей, который охотится на элитную власть Готэма.</AboutMovie>
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
}