import styled from "styled-components";
import colors from "../../../../public/colors.json"

interface Props {
    backBtn?: boolean;
  }
  

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

export const BackButton = styled.button`
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