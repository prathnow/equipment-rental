import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--main-background-color);
  padding: 4rem 4.8rem 6rem;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      {/* Footer */}
    </StyledAppLayout>
  );
}

export default AppLayout;
