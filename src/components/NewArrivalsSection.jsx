import styled from "styled-components";
import Row from "../ui/Row";
import Card from "../ui/Card";
import Slider from "../ui/Slider";

const Section = styled(Row)`
  padding: 0rem 8rem;
  position: relative;
  overflow: hidden;
`;

function NewArrivalsSection() {
  // Example data, replace with real data
  const newArrivals = [
    {
      id: 1,
      title: "PC210LC-11",
      description: "PC210LC-11 KOPARKA KOMATSU GĄSIENICOWA STAGEIV",
      imageUrl:
        "https://ramionline.ramirent.pl/img/eq/PL/_MODELS/I005034.jpg?ver=1689234691",
    },
    {
      id: 2,
      title: "D601APG AUSA WOZIDŁO",
      description: "WOZIDŁA BUDOWLANE O ŁADOWNOŚCI DO 7000 KG",
      imageUrl:
        "https://ramionline.ramirent.pl/img/eq/PL/WZBUD.jpg?ver=1689322301",
    },
    {
      id: 3,
      title: "PW160 KOMATSU",
      description: "KOPARKA KOŁOWA O MASIE 14-16T",
      imageUrl:
        "https://ramionline.ramirent.pl/img/eq/PL/KOKOB.jpg?ver=1654001187",
    },
    {
      id: 4,
      title: "PC210LC-11",
      description: "PC210LC-11 KOPARKA KOMATSU GĄSIENICOWA STAGEIV",
      imageUrl:
        "https://ramionline.ramirent.pl/img/eq/PL/_MODELS/I005034.jpg?ver=1689234691",
    },
    {
      id: 5,
      title: "D601APG AUSA WOZIDŁO",
      description: "WOZIDŁA BUDOWLANE O ŁADOWNOŚCI DO 7000 KG",
      imageUrl:
        "https://ramionline.ramirent.pl/img/eq/PL/WZBUD.jpg?ver=1689322301",
    },
    {
      id: 6,
      title: "PW160 KOMATSU",
      description: "KOPARKA KOŁOWA O MASIE 14-16T",
      imageUrl:
        "https://ramionline.ramirent.pl/img/eq/PL/KOKOB.jpg?ver=1654001187",
    },
  ];

  return (
    <Section $background="--main-background-color">
      <Slider
        title="Nowości w ofercie"
        data={newArrivals}
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
