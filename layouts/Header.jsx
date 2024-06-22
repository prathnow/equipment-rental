import styled from "styled-components";
import Logo from "../src/ui/Logo";
import { MdLocationOn } from "react-icons/md";

const HeaderHolder = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  background-color: var(--main-background-color);
  border-bottom: 3.5rem solid #353535;
`;

const Deparments = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20rem;
  font-size: 1.4rem;
  cursor: pointer;
  white-space: pre;
  height: 6rem;

  &:hover {
    background-color: #353535;
    color: #fff;
    & svg {
      color: #000;
    }
  }

  & svg {
    border-radius: 50px;
    background-color: #f0be1b;
    padding: 0.4rem;
    font-size: 2.4rem;
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
        <MdLocationOn /> Nasze <span>oddziały</span>
      </Deparments>
    </HeaderHolder>
  );
}

export default Header;
