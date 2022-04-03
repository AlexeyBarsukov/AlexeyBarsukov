import styled from 'styled-components';

export const WrapperMovies = styled.div`
  display: flex;
  max-width: 1224px;
  margin: 0 auto;
  flex-direction: column;
  
`



export const HeaderNew = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 20px;
`



export const WrapperCards = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div`
  cursor: pointer;
  &:hover{
    opacity: 0.7;
}
`


export const DecriptionCard = styled.div`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 20px;
  width: 280px;
`

export const FireIconImg = styled.img`
  width:30px;
  height: 20px;

`

// styles part of genres

export const HeaderGenres = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  font-family: sans-serif;
  font-weight: 700;
  margin-top: 45px;
  font-size: 20px;
`


export const WrapperGenres = styled.div`
margin-top: 35px;
display: flex;
justify-content: space-between;
`

export const GenresBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 280px;
  height: 208px;
  cursor: pointer;
  margin-bottom: 75px;
  border-radius: 6px;
  box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
  background: linear-gradient(#F2C94C,#F29A4A);
  &:nth-child(2n){
    background: linear-gradient(#F2994A,#EB5757);
  }

  &:nth-child(3n){
    background: linear-gradient(#56CCF2
      ,#2F80ED);
  }

  &:nth-child(4n){
    background: linear-gradient(#828282
      ,#333333);
  }
  `

export const Test = styled.div`
    display: flex;
    justify-content: space-between;
    height: 135px;
    flex-direction: column;

    p{
      color: #fff;
      font-family: sans-serif;
      font-weight: 400;
      font-size: 20px;
    }
    img{
      margin: 0 auto;
      width: 48px;
      height: 48px;
    }

  `