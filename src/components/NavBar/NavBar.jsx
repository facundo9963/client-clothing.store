import React from "react";
import { Navbar, Button, Text } from "@nextui-org/react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

export default function NavBar() {
  const location = useLocation();

  return (
    <div>
      <Navbar isBordered={false} variant="sticky">
        <Navbar.Brand>
          {/* <Logo /> */}
          <Text b color="inherit" hideIn="xs">
            LOGO
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          activeColor="secondary"
          hideIn="xs"
          variant={"highlight"}
        >
          <NavItem to="/products" title={"Todo"} location={location} />
          <NavItem to="/sport" title="Sport" location={location} />
          <NavItem to="/sales" title="Ofertas" location={location} />
          <NavItem to="/cart" title="Carrito" location={location} />
        </Navbar.Content>
        <Navbar.Content>
          <NavItem
            to="/login"
            title="Login"
            color="inherit"
            location={location}
          />
          <Navbar.Item isActive={"/sign-up" === location.pathname}>
            <Button
              auto
              flat
              as={NavLink}
              to="/sign-up"
              color="secondary"
              style={{ textDecoration: "none" }}
            >
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  );
}
