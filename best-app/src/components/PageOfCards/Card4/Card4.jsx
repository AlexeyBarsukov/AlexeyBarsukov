import Header from "../../Header/Header"
import { AboutMovie, BlockAboutMovie, BlockCategories, BlockNamesMovies, WrapperBlocks, ButtonBack, Comedy, CountryMovies, GenreMovie, ImgBlock, ImgIconArrow, NameMovie, SignCountry, SignOne, SpanSign, WrapperAbout, BlockOfComments, Comment, WrappersOfComments, InputBlock, InputComment, PublishBlock, PublishBtn, ImageArrow, MainWrapperComment, MyComment, YourComment, Li } from "../PageOfCards.styles"
import arrow from '../../../assets/arrow.svg'
import girls from '../../../assets/girls.svg'
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


export const Card4 = () => {
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

  return (
    <>
      <Header />
      <WrapperAbout>
        <ImgBlock>
          <ImageArrow src={arrow} alt="return back" onClick={null} />
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

    </>
  )
};