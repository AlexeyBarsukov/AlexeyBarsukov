import { SearchInput, SearchWrapper } from "./InputSearch.styles"


export const InputSearch = ({ placeholder = 'Поиск...' }) => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder={placeholder} />
    </SearchWrapper>
  )
}