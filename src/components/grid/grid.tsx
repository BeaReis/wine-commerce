import { GridContainer, GridItems, ProductQttTitle } from "./grid.style";

interface Props {
  children: React.ReactNode;
  foundItems: number;
}

const Grid: React.FC<Props> = ({ children, foundItems }) => {
    
  return (
    <GridContainer>
      <ProductQttTitle>{foundItems} produtos encontrados</ProductQttTitle>
      <GridItems>{children}</GridItems>    
    </GridContainer>
  );
};

export default Grid;
