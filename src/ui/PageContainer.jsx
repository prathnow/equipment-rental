import styled from "styled-components";
import Row from "./Row";

const PageContainer = styled(Row)`
  width: 80%;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  margin: 4rem auto;
  gap: 4rem;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default PageContainer;
