import Header from "../../Header/Header"
import { AboutMovie, BlockAboutMovie, BlockCategories, BlockNamesMovies, WrapperBlocks, WrapperAbout, Comedy, CountryMovies, GenreMovie, ImgBlock, NameMovie, SignCountry, SignOne, BlockOfComments, Comment, CommentsBlock, PublishBlock, WrappersOfComments, InputComment, InputBlock, PublishBtn, ImageArrow, MyComment, WrapperMyComment, MainWrapperComment, YourComment, Li } from "../PageOfCards.styles"
import arrow from '../../../assets/arrow.svg'
import cartoon from '../../../assets/cartoon.svg'
// import { useNavigate } from "react-router-dom";
import React, { createElement, useEffect, useState } from "react";
import { DivFooter, Footer } from "../../TV/Tv.styles";

function Card1() {

  // let navigate = useNavigate();
  // navigate('/movies');

  const refInput = React.createRef();
  const [comment, setComment] = useState([])

  function addComment() {
    const commentValue = refInput.current.value;
    const comments = [...comment, commentValue]
    setComment(comments)
    refInput.current.value = '';
  }


  return (
    <>
      <Header />
      <WrapperAbout>
        <ImgBlock >
          <ImageArrow src={arrow} alt="return back" onClick={null} />
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
        <DivFooter>
          sddfsdf
        </DivFooter>
      </Footer>
    </>
  )
};

export default Card1;