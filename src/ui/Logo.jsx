import styled from "styled-components";
import LogoBig from "../assets/logo/logo.png";

const StyledLogo = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 3rem;
  font-weight: 1000;
  color: #353535;
  margin-left: 0.8rem;
`;

const Img = styled.img`
  width: 3.5rem;
`;

function Logo() {
  return (
    <StyledLogo href="">
      <Img
        src={LogoBig}
        alt="IRental Logo"
      />
      <span>IRental</span>
    </StyledLogo>
  );
}

export default Logo;
