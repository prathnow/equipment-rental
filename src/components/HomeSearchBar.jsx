import { MdOutlineSearch } from "react-icons/md";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styled from "styled-components";

const SearchHeader = styled.p`
  width: 80%;
  font-weight: 700;
  font-size: 2.2rem;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 85%;
`;

const SearchIcon = styled(MdOutlineSearch)`
  position: absolute;
  left: 1rem;
  color: var(--color-text-1);
  pointer-events: none;
`;

const StyledInput = styled(Input)`
  padding-left: 4rem;
  width: 100%;
  height: 4.8rem;
`;

const StyledButton = styled(Button)`
  padding-left: 6rem;
  padding-right: 6rem;
  height: 4.8rem;
`;

function HomeSearchBar() {
  return (
    <>
      <SearchHeader>Wypożyczalnia sprzętu</SearchHeader>
      <SearchContainer>
        <SearchIcon size="2.5rem" />
        <StyledInput placeholder="Np. Koparka, ...." />
        <StyledButton
          $variation="search"
          size="medium"
        >
          Szukaj
        </StyledButton>
      </SearchContainer>
    </>
  );
}

export default HomeSearchBar;
