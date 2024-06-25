import styled from "styled-components";
import Row from "../ui/Row";

const StyledRow = styled(Row)`
  background-image: url("/src/assets/images/aboutusbg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ColumnTitle = styled.h2`
  color: var(--color-yellow-500);
  text-align: center;
`;

const ColumnText = styled.p`
  color: var(--color-text-2);
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.8rem;
`;

function AboutUsSection() {
  return (
    <StyledRow $background="var(--color-brand-1)">
      <Columns>
        <Column>
          <ColumnTitle>Nasza Misja</ColumnTitle>
          <ColumnText>
            Naszą misją jest dostarczanie najwyższej jakości sprzętu budowlanego
            na wynajem. Dbamy o to, aby każdy klient mógł liczyć na naszą
            niezawodność i profesjonalne doradztwo.
          </ColumnText>
        </Column>
        <Column>
          <ColumnTitle>Nasza Histora</ColumnTitle>
          <ColumnText>
            Od ponad 20 lat jesteśmy wiodącą firmą na rynku sprzętu budowlanego.
            Zaczynaliśmy jako mała, rodzinna firma, a dziś mamy szeroką gamę
            sprzętu i wielu zadowolonych klientów.
          </ColumnText>
        </Column>
        <Column>
          <ColumnTitle>Nasze Wartości</ColumnTitle>
          <ColumnText>
            Kierujemy się trzema głównymi wartościami: jakością, zaufaniem i
            odpowiedzialnością. Dążymy do tego, aby każdy klient był zadowolony
            z naszych usług i sprzętu.
          </ColumnText>
        </Column>
      </Columns>
    </StyledRow>
  );
}

export default AboutUsSection;
