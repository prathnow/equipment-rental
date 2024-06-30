import styled from "styled-components";
import Row from "../ui/Row";
import {
  MdCarRental,
  MdHomeRepairService,
  MdOutlineDiversity3,
  MdOutlineWorkHistory,
} from "react-icons/md";

const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--color-yellow-500);
  padding: 1rem;
`;

const ServiceList = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  color: var(--color-text-2);
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ServiceItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  & svg {
    font-size: 3rem;
    color: var(--color-yellow-500);
  }
`;

function OurServicesSection() {
  return (
    <Row $background="var(--color-brand-1)">
      <Title>Wynajmujemy czas i spokój</Title>
      <ServiceList>
        <ServiceItem>
          <MdOutlineWorkHistory /> Wynajem sprzętu
        </ServiceItem>
        <ServiceItem>
          <MdHomeRepairService /> Serwis i naprawy
        </ServiceItem>
        <ServiceItem>
          <MdCarRental /> Transport
        </ServiceItem>
        <ServiceItem>
          <MdOutlineDiversity3 /> Profesjonalne doractwo
        </ServiceItem>
      </ServiceList>
    </Row>
  );
}

export default OurServicesSection;
