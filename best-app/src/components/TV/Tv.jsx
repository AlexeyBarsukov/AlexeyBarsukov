import App from "../../App"
import { BlockIconChannel, BlockNameChannel, ImgLogoFooter, Channel, DivFooter, FirstBlock, Footer, NameOfChannel, WrapperChannelContainer, WrapperOfFooter, WrapperTv, FooterText, LinkCss } from './Tv.styles'
import one from '../../assets/one.svg'
import x2 from '../../assets/x2.svg'
import rbk from '../../assets/rbk.svg'
import footerLogo from '../../assets/footerLogo.svg'
import amedia from '../../assets/amedia.svg'

export const Tv = () => {
  return (
    <div>
      <App />
      <WrapperTv>
        <Channel>
          <WrapperChannelContainer>
            <FirstBlock>
              <img src={one} alt="Первый канал" />
            </FirstBlock>
            <div>
              <NameOfChannel>Первый канал</NameOfChannel>
              <p style={{ color: 'red' }}>13:00   Новости(с субтитрами)</p>
              <p>14:00   Давай поженимся</p>
              <p>15:00   Другие новости</p>
            </div>
          </WrapperChannelContainer>
        </Channel>

        <Channel>
          <WrapperChannelContainer>
            <FirstBlock>
              <img src={x2} alt="x2" />
            </FirstBlock>
            <div>
              <NameOfChannel>Первый канал</NameOfChannel>
              <p style={{ color: 'red' }}>13:00 МУЛЬТ ТВ. Сезон 4, 7 серия</p>
              <p>14:00  ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</p>
              <p>15:00   БУРДАШЕВ. Сезон 1, 20 серия</p>
            </div>
          </WrapperChannelContainer>
        </Channel>

        <Channel>
          <WrapperChannelContainer>
            <FirstBlock>
              <img src={rbk} alt="РБК" />
            </FirstBlock>
            <div>
              <NameOfChannel>РБК</NameOfChannel>
              <p style={{ color: 'red' }}>13:00  ДЕНЬ. Горючая смесь: как</p>
              <p>14:00   ДЕНЬ. Главные темы</p>
              <p>15:00  Главные новости</p>
            </div>
          </WrapperChannelContainer>
        </Channel>
        <Channel>
          <WrapperChannelContainer>
            <FirstBlock>
              <img src={amedia} alt="Амедиа премиум" />
            </FirstBlock>
            <div>
              <NameOfChannel>AMEDIA PREMIUM</NameOfChannel>
              <p style={{ color: 'red' }}>13:00   Клиент всегда мёртв </p>
              <p>14:00  Голодные игры: Сойка-пересмешница. Часть I </p>
              <p>15:00  Секс в большом городе</p>
            </div>
          </WrapperChannelContainer>
        </Channel>
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
        {/* <SecondBlock /> */}
      </Footer>
    </div >
  )
}