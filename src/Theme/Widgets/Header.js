import React, { useState } from "react";
import {
  Background,
  Button,
  Heading,
  Flex,
  Container,
  Link
} from "../Elements";
import Widget from "./Widget";
import ImageUpload from "../../ImageUpload";
const url =
  "https://img1.wsimg.com/isteam/ip/759cc48c-8ca0-4db4-9da3-3c653749aa98/allef-vinicius-ig-seteales-354911-unsplas-0002.jpg";

const imgUrlDefault =
  "https://img1.wsimg.com/isteam/ip/759cc48c-8ca0-4db4-9da3-3c653749aa98/logo/ccc5a9a6-1399-4adc-9370-f42191ddf726.webp/:/rs=h:344/ll";
function NavBar({ setImgColors }) {
  return (
    <Flex as="nav" py={24} justifyContent="space-between" alignItems="center">
      <Heading level={3} textStyle="h3" mb={24}>
        <ImageUpload setImgColors={setImgColors}>
          {imgUrl => {
            return (
              <img
                src={imgUrl || imgUrlDefault}
                alt=""
                style={{ maxWidth: "120px" }}
              />
            );
          }}
        </ImageUpload>
      </Heading>
      <Flex>
        <Link href="#" ml={24}>
          Page 1
        </Link>
        <Link href="#" ml={24}>
          Page 2
        </Link>
        <Link href="#" ml={24}>
          Page 3
        </Link>
        <Link href="#" ml={24}>
          Page 4
        </Link>
      </Flex>
    </Flex>
  );
}
export default function Header({ setImgColors, setHeroColors, props }) {
  const [heroImg, setHeroImg] = useState();
  return (
    <Widget {...props} overlay>
      <Background
        backgroundImage={`linear-gradient(
          rgba(0,0,0,.5),
          rgba(0,0,0,0)
        ),url('${heroImg || url}')`}
        backgroundSize="cover"
        setHeroColors={setHeroColors}
        setHeroImg={setHeroImg}
      >
        <Container>
          <NavBar setImgColors={setImgColors} />
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            minHeight="65vh"
          >
            <Heading level={1} textStyle="h1" mb={16}>
              Clean cut. Fresh look.
            </Heading>
            <Heading level={3} textStyle="h3" mb={24}>
              Sub Heading
            </Heading>
            <Button pl={8 * 5} pr={8 * 5} mb={40} variant="primary">
              Button
            </Button>
          </Flex>
        </Container>
      </Background>
    </Widget>
  );
}
