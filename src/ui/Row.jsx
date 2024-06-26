import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  padding: 2.6rem 0;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
      align-items: center;
    `}

    ${(props) =>
    props.size &&
    css`
      width: ${props.size};
    `}

    ${(props) =>
    props.$background !== "" &&
    css`
      background-color: ${props.$background};
    `}

    ${(props) =>
    props.padding !== "" &&
    css`
      padding: ${props.padding};
    `}
`;

Row.defaultProps = {
  type: "vertical",
  size: "100%",
};

export default Row;
