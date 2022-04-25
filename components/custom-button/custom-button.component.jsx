import React from "react";
import * as S from "./custom-button.styles";

const CustomButton = (props) => {
  const { children, ...otherProps } = props;
  return <S.CustomButton {...otherProps}>{children}</S.CustomButton>;
};

export default CustomButton;
