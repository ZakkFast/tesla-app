import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Btns>
        <BtnGroup>
          <LeftBtn>{leftBtnText}</LeftBtn>
          {rightBtnText && <RightBtn>{rightBtnText}</RightBtn>}
        </BtnGroup>
        <DownArrow src="./images/down-arrow.svg" />
      </Btns>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("./images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const BtnGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.95;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  font-weight: bold;
`;

const RightBtn = styled(LeftBtn)`
  background: white;
  opacity: 0.75;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Btns = styled.div``;
