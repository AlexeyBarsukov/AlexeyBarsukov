import styled from "styled-components";

export const WrapperAbout = styled.div`
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  justify-content: space-between;
  width: 1200px;
`

export const BlockAboutMovie = styled.div`
  width: 630px;
  display: flex;
  flex-direction: column;
`

export const WrapperBlocks = styled.div`
  display: flex;

`


export const NameMovie = styled.div`
  margin-bottom: 23px;
   
`

export const CountryMovies = styled.div`
  margin-bottom: 27px;

  `

export const GenreMovie = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AboutMovie = styled.div`
  margin-top: 20px;
  display: flex;
  `
export const ImgBlock = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: flex-start;
`
export const ImageArrow = styled.img`
  cursor: pointer;
`

export const SignOne = styled.div`
  margin-bottom: 21px;
  font-weight: 700;
`
export const SignCountry = styled.div`
  margin-bottom: 20px;


`
export const Comedy = styled.div`
  font-size: 20px;
`

export const BlockNamesMovies = styled.div`
  font-family: sans-serif;
  font-size: 20px;

`

export const BlockCategories = styled.div`
  margin-right: 20px;

`

//block of comments
export const MainWrapperComment = styled.div`
  display: flex;
  justify-content: center;
`


export const BlockOfComments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Comment = styled.h4`
  font-family: sans-serif;
  font-weight: 600;
`

export const CommentsBlock = styled.div`
  margin-right: 16px;
`

export const PublishBlock = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
`

export const WrappersOfComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`

export const InputBlock = styled.div`
  width: 700px;
  padding: 10px;
  height: 110px;
  background-color: rgba(255, 212, 212, 1);
  border-radius: 8px;
  
  margin-bottom: 20px;

`

export const InputComment = styled.textarea`
  resize: none;
  width:100%;
  height: 100%;
  background-color: rgba(255, 212, 212, 1);
  border: none;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 16px;
  &:focus{
    outline:none
  }
  &::placeholder{
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: red;
  }
`

export const PublishBtn = styled.button`
  width: 174px;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 16px;
  height: 38px;
  background: red;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #CC221B;
  }

`
export const WrapperMyComment = styled.div`
  border: 2px solid orange;
`


export const MyComment = styled.div`
  width: 700px;
  height: 135px;
  padding: 10px;
  font-family: sans-serif;
  background:#F2F2F2;
  border-radius: 8px;

  
`
export const YourComment = styled.div`
  margin-top: 20px;
  font-weight: 400;
`

export const Li = styled.li`
  font-family: sans-serif;
  font-weight: 400;
  list-style-type: none;
  margin-left: 20px;

`