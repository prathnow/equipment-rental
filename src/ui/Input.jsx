import styled from "styled-components";

const Input = styled.input`
  padding: 0.9rem 1.2rem;
  background-color: var(--main-background-color);
  border: none;
  font-size: 1.4rem;

  &::placeholder {
    color: #777;
    font-size: 1.2rem;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
