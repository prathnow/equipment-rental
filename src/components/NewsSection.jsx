import styled from "styled-components";
import Row from "../ui/Row";
import Card from "../ui/Card";
import Slider from "../ui/Slider";
import { useLatestNews } from "../hooks/useLatestNews";
import Spinner from "../ui/Spinner";

const Section = styled(Row)`
  padding: 0rem 8rem;
  position: relative;
  overflow: hidden;
`;

function NewsSection() {
  const { isLoading, latestNewsItems } = useLatestNews();

  if (isLoading) return <Spinner />;

  return (
    <Section>
      <Slider
        title="Aktualności"
        data={latestNewsItems}
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
