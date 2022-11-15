import { NextPage } from "next";
import { Container } from "../src/components/common/container.style";
import {
  Arrow,
  BackBtn,
  ProductImg,
  WrapperH,
  WrapperV,
} from "../src/components/product/productImg.style";

const Product: NextPage = () => {
  return (
    <Container>
      <WrapperV>
        <WrapperH>
          <Arrow backBtn></Arrow>
          <BackBtn>Voltar</BackBtn>
        </WrapperH>
        <WrapperH productInfo>
          <ProductImg src="" />
        </WrapperH>
      </WrapperV>
    </Container>
  );
};

export default Product;
