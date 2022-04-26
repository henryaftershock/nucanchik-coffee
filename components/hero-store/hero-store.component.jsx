import React from "react";
import CoffeeSection from "../coffee-section/coffee-section.component";
import * as S from "./hero-store.styles";
import DATA from "../../data/coffee-stores.json";

const HeroStore = (props) => {
  //console.log(theme);
  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>
          <span>Coffee </span>
          <span>Connoisseur</span>
        </S.Title>
        <S.Subtitle>Discover your coffee local shops!</S.Subtitle>
        <S.StyledButton color="primary">View stores nearby</S.StyledButton>
      </S.Wrapper>
      <CoffeeSection title="Otavalo Stores" coffees={DATA} />
    </S.Section>
  );
};

export default HeroStore;
