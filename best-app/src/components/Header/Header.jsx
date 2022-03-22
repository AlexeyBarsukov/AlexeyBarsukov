import { LogoVideoService, SearchBox, SignVideoService, WrapperHeader } from "./Header.styles"
import Logo from '../../assets/logo.svg'
import { InputSearch } from "./InputSearch/InputSearch"
import { Button } from "./button/Button"
import { ButtonRegistration } from "../ButtonRegistration/ButtonRegistration"

export const Header = () => {
  return (
    <WrapperHeader>
      <LogoVideoService>
        <img src={Logo} alt="Logo" />
        <SignVideoService>Видеосервис</SignVideoService>
      </LogoVideoService>
      <SearchBox>
        <InputSearch />
        <Button />
      </SearchBox>
      <ButtonRegistration />
    </WrapperHeader>
  )
}