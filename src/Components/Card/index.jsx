import React, { memo, useState } from "react";
import {
  Box1,
  Box2,
  Container,
  ModalDes,
  TitleWrapper,
  IngridientsCardWrapper,
  IngridientsWrap,
  IngridientsCard,
  Wrap,
  Category,
  Traditional,
  Thin,
  Size,
  Small,
  Medium,
  Large,
  Footer,
  Wrapper,
  Price,
  Weight,
  Btn,
  Cheese,
  Cucumber,
  Pepperoni,
  Sauce,
  Recipe,
  Close,
} from "./style";
import { AnimatePresence } from "framer-motion";
import fire from "../../Assets/icon/fire.svg";
export const Card = ({ value }) => {
  // modal
  const [selectedId, setSelectedId] = useState(null);
  // function for none scroll
  if (selectedId) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  // traditional or thin
  const [type, setType] = useState(false);
  // size
  const [size, setSize] = useState(20);
  // ingridients
  const [mozarella, setMozarella] = useState(false);
  const [cucumber, setCucumber] = useState(false);
  const [pepper, setPepper] = useState(false);
  const [sauce, setSauce] = useState(false);
  //
  const [price, setPrice] = useState(value.price);
  //mozarella
  const mozarellaClick = () => {
    if (mozarella === false) setPrice(price + 59);
    if (mozarella === true) setPrice(price - 59);
    setMozarella(!mozarella);
  };
  //cucumber
  const cucumberClick = () => {
    if (cucumber === false) setPrice(price + 59);
    if (cucumber === true) setPrice(price - 59);
    setCucumber(!cucumber);
  };
  //pepper
  const pepperClick = () => {
    if (pepper === false) setPrice(price + 59);
    if (pepper === true) setPrice(price - 59);
    setPepper(!pepper);
  };
  //sauce
  const sauceClick = () => {
    if (sauce === false) setPrice(price + 59);
    if (sauce === true) setPrice(price - 59);
    setSauce(!sauce);
  };
  // priceClick
  const onCLickPrice = () => {
    if (window.innerWidth <= 660) {
      setSelectedId(value.id);
    }
  };
  // addPizza
  const addPizza = () => {
    setSelectedId(null);
    alert(`Pizza ${value.title} added to cart`);
  };

  return (
    <>
      <Container>
        <Container.Header>
          <Container.Img src={value.img} alt="" />
          {value.new && <Container.Priority> {value?.new} </Container.Priority>}
        </Container.Header>
        <Container.Mobile>
          <Container.Body>
            <Container.Title>{value.title}</Container.Title>
            <Container.Parag>{value.recipe}</Container.Parag>
          </Container.Body>
          <Container.Footer>
            {value.btn ? (
              <Container.Button
                layoutId={value.id}
                onClick={() => setSelectedId(value.id)}
              >
                Выбрать
              </Container.Button>
            ) : (
              <Container.Button>Добавить</Container.Button>
            )}
            {value.btn ? (
              <Container.Price onClick={onCLickPrice}>
                от {value.price} ₽
              </Container.Price>
            ) : (
              <Container.Price>от {value.price} ₽</Container.Price>
            )}
            {value.subPrice && (
              <Container.Cost type="mobile">
                от
                {value?.subPrice} ₽
              </Container.Cost>
            )}
          </Container.Footer>
        </Container.Mobile>
      </Container>

      {/* Modal */}

      <AnimatePresence>
        {selectedId && (
          <Wrap active={selectedId}>
            <ModalDes>
              <Box1>
                {type ? (
                  <Box1.Img type={size} src={value.img2} />
                ) : (
                  <Box1.Img type={size} src={value.img} />
                )}
                {value.new && <Box1.Banner>{value.new}</Box1.Banner>}
              </Box1>
              <Box2>
                <TitleWrapper>
                  <TitleWrapper.Img src={fire} alt="fire" />
                  <TitleWrapper.Title>{value.title}</TitleWrapper.Title>
                </TitleWrapper>
                <Recipe>
                  <Recipe>{value.ingridient}</Recipe>
                </Recipe>
                <Category>
                  <Traditional type={type} onClick={() => setType(false)}>
                    Традиционное
                  </Traditional>
                  <Thin type={type} onClick={() => setType(true)}>
                    Тонкое
                  </Thin>
                </Category>
                <Size>
                  <Small type={size} onClick={() => setSize(20)}>
                    20 см
                  </Small>
                  <Medium type={size} onClick={() => setSize(28)}>
                    28 см
                  </Medium>
                  <Large type={size} onClick={() => setSize(33)}>
                    33 см
                  </Large>
                </Size>

                <Container.Title>Добавить пиццу</Container.Title>
                <IngridientsWrap>
                  <IngridientsCardWrapper>
                    <IngridientsCard add={mozarella} onClick={mozarellaClick}>
                      <Cheese />
                    </IngridientsCard>
                    <IngridientsCard.Title>Моцарелла</IngridientsCard.Title>
                    <Price>59 ₽</Price>
                  </IngridientsCardWrapper>

                  <IngridientsCardWrapper>
                    <IngridientsCard add={cucumber} onClick={cucumberClick}>
                      <Cucumber />
                    </IngridientsCard>
                    <IngridientsCard.Title>Огурцы</IngridientsCard.Title>
                    <Price>59 ₽</Price>
                  </IngridientsCardWrapper>

                  <IngridientsCardWrapper>
                    <IngridientsCard add={pepper} onClick={pepperClick}>
                      <Pepperoni />
                    </IngridientsCard>
                    <IngridientsCard.Title>Пепперони</IngridientsCard.Title>
                    <Price>59 ₽</Price>
                  </IngridientsCardWrapper>

                  <IngridientsCardWrapper>
                    <IngridientsCard add={sauce} onClick={sauceClick}>
                      <Sauce />
                    </IngridientsCard>
                    <IngridientsCard.Title>Соус</IngridientsCard.Title>
                    <Price>59 ₽</Price>
                  </IngridientsCardWrapper>
                </IngridientsWrap>

                <Footer>
                  <Wrapper>
                    <Price>Итого: {price} ₽</Price>
                    <Weight>{value?.weight} g</Weight>
                  </Wrapper>
                  <Btn onClick={addPizza}>Добавить</Btn>
                </Footer>
              </Box2>
              <Close layoutId={value.id} onClick={() => setSelectedId(null)}>
                x
              </Close>
            </ModalDes>
          </Wrap>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Card);
