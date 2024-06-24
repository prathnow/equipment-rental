import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.6rem 1rem;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  `,
  medium: css`
    font-size: 1.3rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-text-2);
    background-color: var(--color-sky-600);

    &:hover {
      background-color: var(--color-sky-700);
    }
  `,
  secondary: css`
    color: var(--color-yellow-100);
    background: var(--color-yellow-400);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-yellow-500);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  search: css`
    color: var(--color-text-2);
    background-color: var(--color-sky-600);
    border-radius: 0;

    &:hover {
      background-color: var(--color-sky-700);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  text-transform: uppercase;

  ${(props) => sizes[props.$size]}
  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  $variation: "primary",
  $size: "medium",
};

export default Button;
