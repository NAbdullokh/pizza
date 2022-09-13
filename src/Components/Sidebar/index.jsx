import React from "react";
import { NavLink } from "react-router-dom";
import { Select } from "../../Mock/select";
import { Box, Wrapper } from "./style";
import { useLocation } from "react-router-dom";

export const SideBar = () => {
  const location = useLocation();
  const actived = (name) => {
    return location.pathname.includes(name)
      ? {
          color: "#E23535",
        }
      : null;
  };
  return (
    <Wrapper>
      {Select.map((value) => {
        return (
          <NavLink key={value.id} to={value.path}>
            <Box>
              <Box.Icon src={value.img} />
              <Box.Title style={actived(value.path)}>{value.title}</Box.Title>
            </Box>
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default SideBar;
