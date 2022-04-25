import { Container } from "@mui/material";
import styled from "styled-components";

export const Header = styled.header`
  background-color: #333;
`;

export const HeaderContent = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  color: #fff;
`;
