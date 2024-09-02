import styled from "styled-components";
import Row from "../ui/Row";
import Card from "../ui/Card";
import Slider from "../ui/Slider";
import { useNewEquipments } from "../hooks/useNewEquipements";
import Spinner from "../ui/Spinner";

const Section = styled(Row)`
  padding: 0rem 8rem;
  position: relative;
  overflow: hidden;
`;

function NewArrivalsSection() {
  const { isLoading, newEquipments } = useNewEquipments();

  if (isLoading) return <Spinner />;

  return (
    <Section $background="--main-background-color">
      <Slider
        title="Nowości w ofercie"
        data={newEquipments}
        render={(item, index) => (
          <Card
            item={item}
            key={index}
          />
        )}
      />
    </Section>
  );
}

export default NewArrivalsSection;
