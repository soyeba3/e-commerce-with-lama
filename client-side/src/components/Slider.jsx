import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import {sliderItems} from '../data'
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSliderIndex(sliderIndex > 0 ? sliderIndex -1 : 2)
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick()}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((item) => {
          return <Slide key={item.id} bg={item.bg}>
          <ImageContainer>
            <Image src={item.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>
              {item.desc}
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick()}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
