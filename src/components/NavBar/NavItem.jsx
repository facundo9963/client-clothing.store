import React from "react";
import { Navbar } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const NavItem = ({ title = "Default", to = "/", location = {}, ...props }) => {
  return (
    <Navbar.Item
      as={NavLink}
      isActive={to === location.pathname}
      to={to}
      style={{ textDecoration: "none" }}
      {...props}
    >
      {title}
    </Navbar.Item>
  );
};

export default NavItem;
