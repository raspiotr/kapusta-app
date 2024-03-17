import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  overflow-x: auto;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  width: 100vw;
  background-color: #ffffff;
  display: flex;
`;

export const Nav = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 13px 16px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoSVG = styled.svg`
  width: 90px;
  height: 31px;
`;

export const Link = styled(NavLink)`
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
`;
