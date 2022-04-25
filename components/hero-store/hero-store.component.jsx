import React from "react";
import * as S from "./hero-store.styles";

const HeroStore = (props) => {
  //console.log(theme);
  return (
    <S.Section>
      <S.Wrapper>
        <S.Title>
          <span>Ñucanchik </span>
          <span>Coffee</span>
        </S.Title>
        <S.Subtitle>Discover your coffee local shops!</S.Subtitle>
        <S.StyledButton color="primary">View stores nearby</S.StyledButton>
      </S.Wrapper>
    </S.Section>
  );
};

export default HeroStore;
