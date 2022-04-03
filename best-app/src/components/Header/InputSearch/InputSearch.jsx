import { SearchInput } from "./InputSearch.styles"


export const InputSearch = ({ placeholder = 'Поиск...' }) => {

  return (
    <>
      <SearchInput type="text" placeholder={placeholder} />

    </>
  )
};