import styled from "styled-components";
import colors from "../../../public/colors.json";

interface Props {
  productInfo?: boolean
}

export const ProductImg = styled.img`
  width: 381px;
  height: 579px;
  object-fit: contain;
`;

export const WrapperH = styled.div<Props>`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${(props) => {
        if (props.productInfo) {
            return`
            justify-content: center;
            margin: 25px 0 0 130px;
            `
        } else {
            return`
            justify-content: flex-start;
            `
        }
    }}
`
export const WrapperV = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`