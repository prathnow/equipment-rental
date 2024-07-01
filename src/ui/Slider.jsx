import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  padding: 3rem 0;
`;

const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  padding: 0 3rem 3rem 3rem;
  width: calc(100vw - 16rem);
`;

const Slides = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: nowrap;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 2rem;
`;

const RightArrow = styled(ArrowButton)`
  right: 2rem;
`;

function Slider({ title, data, render }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <>
      <Title>{title}</Title>
      <SliderWrapper ref={sliderRef}>
        <Slides>{data.map(render)}</Slides>
      </SliderWrapper>
      <LeftArrow onClick={scrollLeft}>
        <FaArrowLeft />
      </LeftArrow>
      <RightArrow onClick={scrollRight}>
        <FaArrowRight />
      </RightArrow>
    </>
  );
}

export default Slider;
