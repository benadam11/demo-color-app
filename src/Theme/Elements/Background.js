import React from "react";
import { StyledBackground } from "./Styled";
import { Text } from "./Text";
import { useTheme } from "../";
import ImageUpload from "../../ImageUpload";

export function Background({ setHeroColors, setHeroImg, children, ...props }) {
  const theme = useTheme();
  return (
    <StyledBackground position="relative" theme={theme} {...props}>
      {children}
      <ImageUpload
        imgCallback={setHeroImg}
        className="update-btn"
        setImgColors={setHeroColors}
      >
        {() => {
          return <Text textStyle="text">Update Cover Image</Text>;
        }}
      </ImageUpload>
    </StyledBackground>
  );
}
