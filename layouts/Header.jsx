import styled from "styled-components";
import Logo from "../src/ui/Logo";

const HeaderHolder = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  background-color: var(--main-background-color);
  border-bottom: 2.5rem solid #353535;
`;

const Deparments = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 15rem;
  font-size: 1rem;
  cursor: pointer;
  white-space: pre;

  &:hover {
    background-color: #353535;
    color: #fff;
  }

  & span {
    font-weight: 700;
  }
`;

function Header() {
  return (
    <HeaderHolder>
      {/* Burger Menu */}
      <Logo />
      <Deparments>
        Nasze <span>oddziały</span>
      </Deparments>
    </HeaderHolder>
  );
}

export default Header;
