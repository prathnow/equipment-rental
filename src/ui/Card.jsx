import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  flex: 1 1 calc(33.333% - 2rem);
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: --shadow-md;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;

  &:hover {
    scale: 1.05;
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 2rem);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: contain;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

function Card({ item, type = "product" }) {
  return (
    <StyledCard>
      <Image
        src={item.imageUrl}
        alt={item.title}
      />
      <CardContent>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
        {type === "product" && <Button $size="small">Wynajmij</Button>}
      </CardContent>
    </StyledCard>
  );
}

export default Card;
