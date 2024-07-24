import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-yellow-500);
  color: #000;
  padding: 2rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Section = styled.div`
  margin: 2rem;
  min-width: 20rem;

  & h4 {
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;
    padding: 0;

    & li {
      margin-bottom: 0.5rem;

      & a {
        color: var(--color-text-3);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  & p {
    margin: 0.5rem 0;
    color: var(--color-text-3);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    transition: all 0.3s;

    &:hover {
      scale: 1.1;
    }
  }
`;

const Bottom = styled.div`
  text-align: center;
  padding: 1rem;

  & p {
    margin: 0;
    color: #000;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Section>
          <h4>Szybkie linki</h4>
          <ul>
            <li>
              <a href="/about">O nas</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
            <li>
              <a href="/privacy">Polityka prywatności</a>
            </li>
            <li>
              <a href="/terms">Warunki użytkowania</a>
            </li>
          </ul>
        </Section>
        <Section>
          <h4>Kontakt</h4>
          <p>Adres: ul. Przykładowa 1, 00-001 Warszawa</p>
          <p>Telefon: +48 123 456 789</p>
          <p>Email: info@przyklad.pl</p>
        </Section>
        <Section>
          <h4>Media społecznościowe</h4>
          <a
            href="https://facebook.com"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </Section>
      </Container>
      <Bottom>
        <p>&copy; 2024 iRental. Wszelkie prawa zastrzeżone.</p>
      </Bottom>
    </StyledFooter>
  );
}

export default Footer;
