// import { useState } from 'react';

// import { LogoVideoService, SearchBox, SignVideoService, WrapperHeader } from "./Header.styles"
// import Logo from '../../assets/logo.svg'
// import { InputSearch } from "./InputSearch/InputSearch"
// import { Button } from "./button/Button"
// import { ButtonRegistration } from "../ButtonRegistration/ButtonRegistration"
// import ModalWindow from '../modal/Modal';
// import JSONDATA from '../../MOCK_DATA.json'



// const Header = () => {
//   const [active, setActive] = useState(false);

//   // const [searchTerm, setSearchTerm] = useState('')

//   return (
//     <WrapperHeader>
//       <LogoVideoService>
//         <img src={Logo} alt="Logo" />
//         <SignVideoService>Видеосервис</SignVideoService>
//       </LogoVideoService>
//       <SearchBox>
//         <InputSearch />
//         <Button />
//       </SearchBox>
//       <ButtonRegistration onClick={setActive.bind(null, !active)} />
//       {active &&
//         <ModalWindow onClick={setActive.bind(null, false)} />
//       }
//     </WrapperHeader >
//   )
// };


// export default Header