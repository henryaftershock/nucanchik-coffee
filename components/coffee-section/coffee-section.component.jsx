import React from "react";
import * as S from "./coffee-section.styles";
import CoffeeCard from "../coffee-card/coffee-card.component";
import { Grid } from "@mui/material";

const CoffeeSection = ({ title, coffees }) => {
  if (!coffees || !title) return null;
  return (
    <S.Section>
      <S.Title>{title}</S.Title>
      <S.CoffeeGrid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
      >
        {coffees.map((coffee, index) => (
          <Grid item key={`coffee-card-${index}`} xs={12} sm={6} md={4}>
            <CoffeeCard {...coffee} />
          </Grid>
        ))}
      </S.CoffeeGrid>
    </S.Section>
  );
};

export default CoffeeSection;
