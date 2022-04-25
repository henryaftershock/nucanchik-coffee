import { Container } from "@mui/material";
import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const Section = styled.section`
  width: 100%;
  background-image: url("/static/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  min-height: 100vh;
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  ${({ theme }) => theme.breakpoints.up("md")} {
    align-items: flex-start;
    background-position: center;
  }
  //height: 500px;
  min-height: 500px;
  background-image: url("/static/hero-image.png");
  background-repeat: no-repeat;
  background-position: 50%;

  //background-size: cover;
`;

export const Title = styled.h1`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.palette.primary.main};
  span {
    &:first-child {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.5rem;
`;

export const StyledButton = styled(CustomButton)`
  border-radius: 0px;
  width: fit-content;
`;
