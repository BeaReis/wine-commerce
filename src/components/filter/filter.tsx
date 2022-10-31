import { Category, FilterContainer, FilterTitle } from "./filter.style";

const Filter: React.FC = () => {
    return(
        <FilterContainer>
            <FilterTitle>Refine sua busca</FilterTitle>
            <Category>Por preço</Category>
            
        </FilterContainer>
    )
}

export default Filter;