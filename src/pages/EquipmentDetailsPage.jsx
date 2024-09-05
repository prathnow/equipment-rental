import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import Button from "../ui/Button";
import Row from "../ui/Row";
import { MdOutlinePercent } from "react-icons/md";
import Input from "../ui/Input";
import { useState } from "react";
import { useEquipment } from "../hooks/useEquipment";
import Spinner from "../ui/Spinner";
import Specifications from "../ui/Specifications";
import BreadCrumb from "../ui/BreadCrumb";

const DetailsPageContainer = styled(Row)`
  width: 80%;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  margin: 4rem auto;
  gap: 4rem;
  justify-content: space-around;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledBreadCrumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 4rem;
`;

const EquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

const EquipmentImage = styled.img`
  max-width: 40rem;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const EquipmentTitle = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const EquipmentDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const EquipmentRentBox = styled.div`
  min-width: 30rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  background-color: var(--main-background-color);
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  margin: 4rem;

  @media (max-width: 768px) {
    width: calc(100% - 8rem);
  }
`;

const EquipmentRentPrice = styled.p`
  font-size: 2rem;
  color: var(--color-text-1);
  padding-bottom: 2rem;

  &:first-child {
    padding: 2rem 2rem 0 2rem;
    font-size: 2.6rem;
  }

  & span {
    font-weight: 600;
  }
`;

const EquipmentRentExtraPrice = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--color-yellow-500);
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-text-2);
  padding: 0.4rem;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0 4rem 0;

  & input {
    border: none;
    border-radius: var(--border-radius-tiny);
    box-shadow: var(--shadow-sm);
  }
`;

function EquipmentDetailsPage() {
  const { productId } = useParams();
  const { isLoading, equipmentData, error } = useEquipment(productId);
  const navigate = useNavigate();
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const today = new Date();
  const getDatePlusDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };
  const isFormCompleted =
    !fullName || !phoneNumber || !email || !startDate || !endDate
      ? true
      : false;

  //   const equipment = equipmentData.find((item) => item.id === productId);
  const equipment = equipmentData;

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  if (!equipment) {
    return <p>Equipment not found</p>;
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && date > endDate) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <DetailsPageContainer
      type="horizontal"
      $background="var(--color-text-2)"
    >
      <StyledBreadCrumb>
        <BreadCrumb>{equipment.title}</BreadCrumb>
      </StyledBreadCrumb>
      <EquipmentContainer>
        <EquipmentImage
          src={equipment.imageUrl}
          alt={equipment.title}
        />
        <EquipmentTitle>{equipment.name}</EquipmentTitle>
        <EquipmentDescription>{equipment.description}</EquipmentDescription>

        <Specifications specifications={equipmentData.specifications} />
      </EquipmentContainer>

      <EquipmentRentBox>
        <EquipmentRentPrice>
          <span>{equipment.price_per_day} zł</span> netto/doba
        </EquipmentRentPrice>
        <EquipmentRentPrice>
          <span>{equipment.price_per_day * 1.23} zł</span> brutto/doba
        </EquipmentRentPrice>
        <EquipmentRentExtraPrice>
          <MdOutlinePercent size="1.8rem" /> Tydzień tylko 5 stawek dobowych!
        </EquipmentRentExtraPrice>

        <FormBox>
          <Input
            type="text"
            placeholder="Imię i Nazwisko"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Wpisz swój numer telefonu"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Wpisz swój adres email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <DatePicker
            id="startDate"
            showIcon
            toggleCalendarOnIconClick
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={today}
            dateFormat="yyyy/MM/dd"
            placeholderText="Wynajem od"
            customInput={<Input />}
          />

          <DatePicker
            id="endDate"
            showIcon
            toggleCalendarOnIconClick
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || getDatePlusDays(3)}
            dateFormat="yyyy/MM/dd"
            placeholderText="Wynajem do"
            customInput={<Input />}
          />

          <Button
            $size="medium"
            disabled={isFormCompleted}
          >
            Zapytaj o produkt
          </Button>
          <Button $size="medium">Dodaj do koszyka</Button>
        </FormBox>
      </EquipmentRentBox>
    </DetailsPageContainer>
  );
}

export default EquipmentDetailsPage;
