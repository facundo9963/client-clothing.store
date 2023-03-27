import React from "react";
import { Button, Col, Container, Image, Row } from "@nextui-org/react";
import { Link } from "react-router-dom";
import image404 from "../images/404.svg";

const NotFound = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      height="100vh"
    >
      <Row justify="center" gap={1}>
        <Col align="center">
          <Image src={image404} alt="404" width={400} height={200} />
        </Col>
        <Col align="center" xs={12}>
          <h1>¡Ups! No pudimos encontrar lo que buscas</h1>
          <p>
            Lo sentimos, pero la página que estás buscando no existe o ha sido
            eliminada. Por favor, verifica la URL o vuelve a la página de
            inicio.
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Volver a la página de inicio
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
