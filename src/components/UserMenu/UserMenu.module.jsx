import styled from "styled-components";

export const Avatar = styled.span`
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 700;
  margin-right: 12px;
  color: rgba(82, 85, 95, 1);
  letter-spacing: 0.04em;
  text-align: center;
  background-color: rgba(245, 246, 250, 1);
  border-radius: 50px;
`;

export const LogoutButton = styled.button`
  font-size: 12px;
  font-weight: 400;
  color: rgba(82, 85, 95, 1);
  letter-spacing: 0.04em;
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  border-left: 1px solid rgba(224, 229, 235, 1);
  padding: 11px 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Name = styled.span`
  padding: 9px 20px 9px 0px;
  color: rgba(82, 85, 95, 1);
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const LogoutIcon = styled.svg`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
`;
