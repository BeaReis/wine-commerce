import styled from "styled-components";
import colors from "../../../public/colors.json";

interface Props {
  backBtn?: boolean;
  productInfo?: boolean;
}

export const ProductImg = styled.img`
  width: 381px;
  height: 579px;
  object-fit: contain;
`;

export const Arrow = styled.div<Props>`
  ${(props) => {
    if (props.backBtn) {
      return `
        height: 6.5px;
        width: 6.5px;
        border: 1px solid ${colors.neutrals.black};
        border-width: 2px 0 0 2px;
        transform: rotate(-45deg);
        `;
    } else {
      return `
        height: 5.5px;
        width: 5.5px;
        border: 1px solid ${colors.neutrals.gray};
        border-width: 0 1px 1px 0;
        transform: rotate(-45deg);
        `;
    }
  }}
  display: inline-block;
  padding: 3px;
`;

export const BackBtn = styled.button`
    font-family: 'Titillium Web', sans-serif;
    color: ${colors.neutrals.black};
    font-size: 18px;
    font-weight: 400;
    width: fit-content;
    padding-bottom: 2px;
    height: 24px;
    text-align: center;
    border: none;
    cursor: pointer;
`
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