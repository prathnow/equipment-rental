import { useSearchParams } from "react-router-dom";
import BreadCrumb from "../ui/BreadCrumb";
import PageContainer from "../ui/PageContainer";
import { useSearch } from "../hooks/useSearch";
import Spinner from "../ui/Spinner";
import Card from "../ui/Card";
import styled from "styled-components";

const Results = styled.div`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem;
  justify-content: space-evenly;
`;

function SearchResults() {
  const [searchParams, setSerachParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  console.log(searchTerm);

  const { isLoading, searchResult: results } = useSearch(searchTerm);

  if (isLoading) return <Spinner />;
  console.log(results);

  return (
    <PageContainer>
      <BreadCrumb>Wyszukiwarka</BreadCrumb>
      <h1>Wyniki wyszukiwarki</h1>
      <Results>
        {!results || results.length > 0 ? (
          // <ul>
          //   {results.map((item) => (
          //     <li key={item.id}>
          //       <img
          //         src={item.imageUrl}
          //         alt={item.name}
          //       />
          //       <h3>{item.name}</h3>
          //       <p>{item.description}</p>
          //       <p>Cena: {item.price} zł/dzień</p>
          //     </li>
          //   ))}
          // </ul>
          results.map((item) => (
            <Card
              item={item}
              type="product"
              key={item.id}
            />
          ))
        ) : (
          <p>Brak wyników wyszukiwania</p>
        )}
      </Results>
    </PageContainer>
  );
}

export default SearchResults;
