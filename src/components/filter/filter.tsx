import {
  Category,
  FilterContainer,
  FilterTitle,
  Label,
  RadioBtn,
  RadioGroup,
  Wrapper,
} from "./filter.style";

const Filter: React.FC = () => {
  return (
    <FilterContainer>
      <FilterTitle>Refine sua busca</FilterTitle>
      <Category>Por preço</Category>
      <Wrapper>
        <RadioBtn type="radio" id="radio-btn" name="radio" defaultChecked />
        <Label htmlFor="radio-btn">Sem filtro</Label>
      </Wrapper>
      <Wrapper>
        <RadioBtn type="radio" id="radio-btn" name="radio" />
        <Label htmlFor="radio-btn">Até R$ 40</Label>
      </Wrapper>
      <Wrapper>
        <RadioBtn type="radio" id="radio-btn" name="radio" />
        <Label htmlFor="radio-btn">R$ 40 até R$ 99</Label>
      </Wrapper>
      <Wrapper>
        <RadioBtn type="radio" id="radio-btn" name="radio" />
        <Label htmlFor="radio-btn">R$ 100 até R$ 199</Label>
      </Wrapper>
      <Wrapper>
        <RadioBtn type="radio" id="radio-btn" name="radio" />
        <Label htmlFor="radio-btn">Acima de R$ 200</Label>
      </Wrapper>
    </FilterContainer>
  );
};

export default Filter;
