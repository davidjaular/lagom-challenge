import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Container,
  PhoneImage,
  H1,
  LagomImage,
  MainText,
  Header,
  LogoContainer,
  Options,
  Separator,
  Flex,
  MenuContainer,
  MenuContent,
} from "./styles";
import { ReactComponent as Lagom } from "./assets/Lagom.svg";
import { ReactComponent as Menu } from "./assets/Menu.svg";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { ReactComponent as LagomSmall } from "./assets/ggg.svg";
import { ReactComponent as ArrowRightUp } from "./assets/arrow-right-up.svg";
import { ReactComponent as ArrowRightUpGrey } from "./assets/arrow-right-up-grey.svg";
import { ReactComponent as ArrowAngle } from "./assets/angle-arrow.svg";
import { ReactComponent as Close } from "./assets/Close.svg";
import lagggom from "./assets/Lagggom.png";
import holdingPhone from "./assets/Holding-Phone.png";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

import useWindowSize from "./helpers/useWindowSize";
import useKeypress from "./helpers/useKeypress";

const Home = () => {
  const size = useWindowSize();
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState(false);

  const AnimatedRow = animated(Row);

  const menuAnimation = useSpring({
    width: show ? (size.width - 500 > 768 ? "50vw" : "100vw") : "0vw",
    padding: show ? "35px" : "0px",
    paddingLeft: show ? (size.width - 500 > 768 ? "150px" : "50px") : "0px",
  });

  const menuContent = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0px)" : "translateY(500px)",
  });

  const rowAnimation = useSpring({
    opacity: animation ? 1 : 0,
    transform: animation ? "translateX(0px)" : "translateX(500px)",
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const rowAnimationTwo = useSpring({
    opacity: animation ? 1 : 0,
    transform: animation ? "translateX(0px)" : "translateX(-500px)",
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useKeypress("Escape", () => {
    setShow(false);
  });

  const handleClickOutside = (event) => {
    if (!event.target.classList.contains("menu-container")) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container name="test1" className="active">
      <MenuContainer style={menuAnimation} className="menu-container">
        <Close
          style={{
            alignSelf: "flex-end",
            display: show ? "block" : "none",
            cursor: "pointer",
          }}
          onClick={() => setShow(false)}
        />
        <MenuContent className="menu-container" style={menuContent}>
          <H1>
            <ArrowAngle style={{ marginRight: 10 }} />
            Home
          </H1>
          <H1 style={{ color: "#999" }}>About</H1>
          <H1 style={{ color: "#999" }}>Work</H1>
        </MenuContent>
      </MenuContainer>
      <AnimatedRow style={rowAnimationTwo}>
        <Col md={6} sm={12} className="order">
          <PhoneImage src={holdingPhone} />
        </Col>
        <Col md={6} sm={12} className="center">
          <Header>
            {size.width > 768 ? <Lagom /> : <LagomSmall />}
            <Link
              to="test1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={(to) => setAnimation(true)}
            >
              <Menu
                onClick={() => setShow(true)}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Header>
          <Separator width="88%" />
          <Flex>
            <MainText>
              Digital products lovingly made with a human touch.
            </MainText>
          </Flex>
        </Col>
      </AnimatedRow>
      <AnimatedRow style={rowAnimation}>
        <Col
          md={6}
          sm={12}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Options>
            <H1>Dribbble</H1>
            <ArrowRightUp />
          </Options>
          <Separator width="84%" />
          <Options>
            <H1 style={{ color: "#888888" }}>Twitter</H1>
            <ArrowRightUpGrey />
          </Options>
        </Col>
        <Col md={6} sm={12}>
          <Row>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <Col md={6} sm={12}>
              <LagomImage src={lagggom} />
            </Col>
          </Row>
        </Col>
      </AnimatedRow>
    </Container>
  );
};

export default Home;
