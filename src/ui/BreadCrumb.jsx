import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Breadcrumb = styled.nav`
  font-size: 14px;
  margin-bottom: 2rem;
`;

const BreadcrumbLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: ">";
    margin-left: 0.5rem;
    color: #999;
  }

  &:last-child::after {
    content: "";
    margin-left: 0;
  }
`;

function BreadCrumb({ children }) {
  const navigate = useNavigate();
  return (
    <Breadcrumb>
      <BreadcrumbLink
        to="#"
        onClick={() => navigate(-1)}
      >
        Powrót
      </BreadcrumbLink>
      <span>{children}</span>
    </Breadcrumb>
  );
}

export default BreadCrumb;
