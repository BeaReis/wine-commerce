import { NextPage } from "next";
import BackBtn from "../src/components/button/back/backBtn";
import { Container } from "../src/components/common/container.style";
import {
  ProductImg,
  WrapperH,
  WrapperV,
} from "../src/components/productInfo/productInfo.style";

const Product: NextPage = () => {
  return (
    <Container>
      <WrapperV>
        <BackBtn />
        <WrapperH productInfo>
          <ProductImg src="" />
        </WrapperH>
      </WrapperV>
    </Container>
  );
};

export default Product;
