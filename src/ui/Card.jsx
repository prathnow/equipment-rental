import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  flex: 0 0 30rem;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;

  &:hover {
    scale: 1.02;
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(100vw - 20rem);
  }

  @media (max-width: 480px) {
    flex: 0 0 calc(100vw - 20rem);
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
  const navigate = useNavigate();
  const link = type === "product" ? "wynajem" : "news";
  const linkName = item.title.split(" ").join("-").toLowerCase();

  return (
    <StyledCard>
      <Image
        src={item.imageUrl}
        alt={item.title}
      />
      <CardContent>
        <CardTitle>
          <Link to={`/${link}/${linkName}/${item.id}`}>{item.title}</Link>
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
        {type === "product" && (
          <Button
            $size="small"
            onClick={() => navigate(`/wynajem/${linkName}/${item.id}`)}
          >
            Wynajmij
          </Button>
        )}
      </CardContent>
    </StyledCard>
  );
}

export default Card;
