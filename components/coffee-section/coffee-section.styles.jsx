import styled from "styled-components";
import { Container, Grid } from "@mui/material";

export const Section = styled(Container)``;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const CoffeeGrid = styled(Grid)``;
