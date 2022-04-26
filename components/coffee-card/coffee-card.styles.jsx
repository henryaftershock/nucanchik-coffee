import styled from "styled-components";
import Image from "next/image";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  :hover {
    background-color: rgb(255, 255, 255, 0.8);
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const ImageWrapper = styled.div`
  width: 100% !important;
  height: 100% !important;
  ${({ paddingpercentage }) =>
    paddingpercentage
      ? `
    height: auto !important;
    position: relative;
    //padding-top: ${paddingpercentage}%; 

  // > div {
  //   padding-bottom: 0 !important;
  // }import { Link } from 'next/link';
// import { Image } from 'next/image';
// import { Image } from 'next/image';
// import { Image } from './coffee-card.styles';

  
    .coffe-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      //transform: none;
    }
  }
   `
      : ""};
`;

export const CustomImage = styled(Image)`
  position: relative;
  /* ${({ paddingpercentage }) =>
    paddingpercentage
      ? `
    height: auto !important;
    position: relative;
    padding-top: ${paddingpercentage}%; 

  // > div {
  //   padding-bottom: 0 !important;
  // }import { Link } from 'next/link';
import { Image } from 'next/image';
import { Image } from 'next/image';
import { Image } from './coffee-card.styles';

  
    .coffe-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      //transform: none;
    }
  }
   `
      : ""}; */
`;
