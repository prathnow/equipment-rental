import styled from "styled-components";
import Row from "../ui/Row";
import Card from "../ui/Card";
import Slider from "../ui/Slider";

const Section = styled(Row)`
  padding: 0rem 8rem;
  position: relative;
  overflow: hidden;
`;

const newsItems = [
  {
    id: 1,
    title: "Letnia promocja",
    date: "2024-06-10",
    description:
      "Skorzystaj z naszej letniej promocji i otrzymaj zniżki do 20% na wybrane wynajmy.",
    imageUrl:
      "https://www.atutrental.com.pl/wp-content/uploads/2024/06/PL_Aftermarket-promotion_social-media-banner_1200x680_June_July.jpg",
  },
  {
    id: 2,
    title: "Otwarcie nowej filii",
    date: "2024-06-01",
    description:
      "Z radością informujemy o otwarciu nowej filii w Krakowie. Zapraszamy do odwiedzin!",
    imageUrl:
      "https://www.atutrental.com.pl/wp-content/uploads/2024/06/IMG-20240613-WA0023.jpg",
  },
  {
    id: 3,
    title: "Bezpieczeństwo na budowie",
    date: "2024-05-20",
    description:
      "Organizujemy szkolenia z zakresu bezpieczeństwa i higieny pracy na budowie. Zgłoś się już dziś!",
    imageUrl:
      "https://www.atutrental.com.pl/wp-content/uploads/2022/06/single-news__cover.jpg",
  },
  {
    id: 4,
    title: "Letnia promocja",
    date: "2024-06-10",
    description:
      "Skorzystaj z naszej letniej promocji i otrzymaj zniżki do 20% na wybrane wynajmy.",
    imageUrl:
      "https://www.atutrental.com.pl/wp-content/uploads/2024/06/PL_Aftermarket-promotion_social-media-banner_1200x680_June_July.jpg",
  },
  {
    id: 5,
    title: "Otwarcie nowej filii",
    date: "2024-06-01",
    description:
      "Z radością informujemy o otwarciu nowej filii w Krakowie. Zapraszamy do odwiedzin!",
    imageUrl:
      "https://www.atutrental.com.pl/wp-content/uploads/2024/06/IMG-20240613-WA0023.jpg",
  },
  {
    id: 6,
    title: "Bezpieczeństwo na budowie",
    date: "2024-05-20",
    description:
      "Organizujemy szkolenia z zakresu bezpieczeństwa i higieny pracy na budowie. Zgłoś się już dziś!",
    imageUrl:
      "https://www.atutrental.com.pl/wp-content/uploads/2022/06/single-news__cover.jpg",
  },
];

function NewsSection() {
  return (
    <Section>
      <Slider
        title="Aktualności"
        data={newsItems}
        render={(item, index) => (
          <Card
            item={item}
            key={index}
            type="news"
          />
        )}
      />
    </Section>
  );
}

export default NewsSection;
