import { H1, Subtitle, List, Footer, Container, Div } from "./styles";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import { Link } from "react-scroll";

const Instructions = () => (
  <Container>
    <Div>
      <H1>Challenge Front-end Dev</H1>
      <Subtitle>Instrucciones</Subtitle>
      <List>
        <li>Maquetar las siguientes 2 pantallas (Home & Menu) en React</li>
        <li>Versión responsive</li>
      </List>
      <Subtitle>Efectos & Comportamiento</Subtitle>
      <List>
        <li>
          Agregar effectos de carga, animaciones, etc a tu gusto (ejemplos:
          Fade-in, Fade-in up, etc)
        </li>
        <li>
          El menú debe poder cerrarse con: Boton ✗, tecla ESC y con click fuera
          del menú
        </li>
      </List>
      <Subtitle>Assets</Subtitle>
      <List>
        <li>Font: Inter UI</li>
        <li>Logotipos, iconos: svg</li>
        <li>Imagenes: png a 2x</li>
      </List>
    </Div>
    <Link
      to="test1"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      onSetActive={(to) => console.log(to)}
    >
      <Footer>
        <H1 style={{ color: "white", margin: 0 }}>¿Listo?</H1>
        <Arrow />
      </Footer>
    </Link>
  </Container>
);

export default Instructions;
