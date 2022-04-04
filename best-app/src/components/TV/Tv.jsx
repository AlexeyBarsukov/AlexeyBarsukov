import App from "../../App"
import { BlockIconChannel, BlockNameChannel, ImgLogoFooter, Channel, DivFooter, FirstBlock, Footer, NameOfChannel, WrapperChannelContainer, WrapperOfFooter, WrapperTv, FooterText, LinkCss } from './Tv.styles'
import one from '../../assets/one.svg'
import x2 from '../../assets/x2.svg'
import rbk from '../../assets/rbk.svg'
import footerLogo from '../../assets/footerLogo.svg'
import amedia from '../../assets/amedia.svg'
import { LogoVideoService, SearchBox, SignVideoService, WrapperHeader } from "../Header/Header.styles"
import { SearchInput } from "../Header/InputSearch/InputSearch.styles"
// import { Button } from "../Header/button/Button"
import { ButtonRegistration } from "../ButtonRegistration/ButtonRegistration"
import ModalWindow from "../modal/Modal"
import Logo from '../../assets/logo.svg'
import { useState } from "react"
import Menu from "../Menu/Menu"
import JSONDATA from '../../MOCK_DATA.json';
import { Button } from "../Header/button/Button"



export const Tv = () => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <WrapperHeader>
        <LogoVideoService>
          <img src={Logo} alt="Logo" />
          <SignVideoService>Видеосервис</SignVideoService>
        </LogoVideoService>
        <SearchBox>
          <SearchInput type="text" placeholder='Поиск...' onChange={(event) => { setSearchTerm(event.target.value) }} />
          <Button />
        </SearchBox>
        <ButtonRegistration onClick={setActive.bind(null, !active)} />
        {active &&
          <ModalWindow onClick={setActive.bind(null, false)} />
        }
      </WrapperHeader >
      <Menu />
      <WrapperTv>
        {JSONDATA.filter((val) => {
          if (searchTerm == '') {
            return val
          } else if (val.NameChannel.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }

        }).map((val, key) => {
          return (
            <Channel key={key}>
              <WrapperChannelContainer>
                <FirstBlock>
                  <img src={require(`../../assets/${val.PhotoChannel}.svg`)} alt="Первый канал" />
                </FirstBlock>
                <div>
                  <NameOfChannel>{val.NameChannel}</NameOfChannel>
                  <p style={{ color: 'red' }}>{val.NameP1}</p>
                  <p>{val.NameP2}</p>
                  <p>{val.NameP3}</p>
                </div>
              </WrapperChannelContainer>
            </Channel>
          )
        })
        }
      </WrapperTv >
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
    </div >
  )
}