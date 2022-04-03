import styled from "styled-components";


export const WrapperTv = styled.div`
  margin: 0 auto;
  width: 1180px;
  height: 500px;
  overflow-y: auto;
  margin-bottom: 20px;
  &::-webkit-scrollbar{
    width: 4px;  
    background-color: rgba(207, 207, 207, 1);
    border-radius: 2px;
}

&::-webkit-scrollbar-thumb {
  background: #BDBDBD;
  border-radius: 2px;
}
`
export const Channel = styled.div`
  width: 1160px;
  height: 165px;
  border-radius: 20px;
  background-color: rgba(207, 207, 207, 1);
  margin-bottom: 20px;
`


export const WrapperChannelContainer = styled.div`
  width: 700px;
 display: flex;
`

export const NameOfChannel = styled.h4`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 16px;
`

export const FirstBlock = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const BlockIconChannel = styled.div`
  border: 2px solid blue;
`


export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #F2F2F2;

`
export const WrapperOfFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 900px;
`


export const DivFooter = styled.div`
 
`
export const ImgLogoFooter = styled.img`
  margin-right: 10px;
`

export const FooterText = styled.p`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 16px;

`
export const LinkCss = styled.a`
  text-decoration: none;
  color:#1F4766;
  font-weight: 600;
  font-size: 16px;
  font-family: sans-serif;
  margin-bottom: 20px;
`