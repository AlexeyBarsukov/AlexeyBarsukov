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

export const MainBlockOfCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


`

export const WrapperCards = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 200px;
  overflow-x: auto;

  &::-webkit-scrollbar{
    height: 7px;  
    background-color: rgba(207, 207, 207, 1);
    border-radius: 2px;
}

&::-webkit-scrollbar-thumb {
  background: linear-gradient(#F2994A,#EB5757);
  border-radius: 2px;
  &:hover{
    background: linear-gradient(#56CCF2,#2F80ED);
  }
}
`

export const Card = styled.div`

  cursor: pointer;
  margin-bottom: 20px;
  min-width: 294px;
  margin-right: 20px;
li{
    position: relative;
    border-radius: 8px;
    display: inline-block;
    overflow: hidden;
    

}
  p{
    position: absolute;
    top: 0;
    margin: 0 auto;
    color: #f2f2f2;
    font-family: sans-serif;
    font-weight: 400;
    margin: 15px;
  }
 
  
li > div.effect-to-right {
    width: 100%;
    height: 99%;
    border-radius: 8px;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
li:hover > div.effect-to-right {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;

}

li div.effect-to-right {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.3); /* Фон блока при наведении */
  transition: all 0.4s ease-in-out;
  color: #fff;
  transform: translate(-250px, 0px) rotate(0deg); /* Направление выезжающей панели */
}

li:hover div.effect-to-right {
  opacity: 1;
  transform: translate(0px, 0px) rotate(0deg);
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