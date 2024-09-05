import PageContainer from "../ui/PageContainer";
import { useNews } from "../hooks/useNews";
import styled from "styled-components";
import Spinner from "../ui/Spinner";
import BreadCrumb from "../ui/BreadCrumb";
import { useParams } from "react-router";

const NewsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

const NewsImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: var(--border-radius-md);
`;

const NewsTitle = styled.h1`
  font-size: 32px;
  margin-top: 2rem;
  color: #333;
`;

const NewsContent = styled.div`
  font-size: 18px;
  color: #444;
  line-height: 1.6;
  margin-top: 1.5rem;
`;

const NewsDate = styled.span`
  font-size: 14px;
  color: #999;
  margin-top: 1rem;
  display: block;
`;

function News() {
  const { newsId } = useParams();
  const { isLoading, news } = useNews(newsId);
  const { title, content, created_at, imageUrl } = news;

  if (isLoading) return <Spinner />;

  return (
    <PageContainer>
      <NewsContentContainer>
        <BreadCrumb>{title}</BreadCrumb>
        <NewsImage
          src={imageUrl}
          alt={title}
        />
        <NewsTitle>{title}</NewsTitle>
        <NewsContent>{content}</NewsContent>
        <NewsDate>{new Date(created_at).toLocaleDateString()}</NewsDate>
      </NewsContentContainer>
    </PageContainer>
  );
}

export default News;
