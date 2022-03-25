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