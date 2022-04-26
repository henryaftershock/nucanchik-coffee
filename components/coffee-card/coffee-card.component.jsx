import Link from "next/link";
import React from "react";
import * as S from "./coffee-card.styles";
import Image from "next/image";

const CoffeeCard = (props) => {
  const { name, imgUrl, id } = props;

  return (
    <Link href={`/coffee-store/${id}`}>
      <a>
        <S.CardWrapper>
          <S.Title>{name}</S.Title>
          <S.ImageWrapper paddingpercentage={75}>
            <Image
              src={imgUrl}
              alt={`img-${name}`}
              width="100%"
              height="100%"
              layout="responsive"
              className="coffe-image"
            />
          </S.ImageWrapper>
        </S.CardWrapper>
      </a>
    </Link>
  );
};

export default CoffeeCard;
