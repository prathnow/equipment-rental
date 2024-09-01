import styled from "styled-components";

const ParamsList = styled.ul`
  width: 50%;
`;

const ParamsListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:nth-child(odd) {
    background-color: #eee;
  }
`;

function Specifications({ specifications }) {
  if (!specifications) return null;

  const specsEntries = Object.entries(specifications);

  return (
    <ParamsList>
      <h4>PARAMETRY</h4>

      {specsEntries.map(([key, value]) => (
        <ParamsListItem key={key}>
          <strong>{key}:</strong> {value}
        </ParamsListItem>
      ))}
    </ParamsList>
  );
}

export default Specifications;
