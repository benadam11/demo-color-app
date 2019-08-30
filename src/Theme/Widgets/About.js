import React from "react";
import uuid from "uuid";
import {
  Text,
  Heading,
  Section,
  Flex,
  Container,
  Grid,
  Image
} from "../Elements";
import Widget from "./Widget";

const data = [
  `https://source.unsplash.com/random/${uuid()}`,
  `https://source.unsplash.com/random/${uuid()}`,
  `https://source.unsplash.com/random/${uuid()}`
];

const textString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.";
export default function About(props) {
  return (
    <Widget {...props}>
      <Section bg="pageBackground" py={80} px={20}>
        <Container>
          <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="2em">
            {data.map((img, i) => (
              <Flex key={i} flexDirection="column" justifyContent="center">
                <Image treatment="cover" height={200} mb={24} src={img} />
                <Heading level={4} textStyle="h4" mb={24}>
                  Sub Heading
                </Heading>
                <Text textStyle="text">{textString}</Text>
              </Flex>
            ))}
          </Grid>
        </Container>
      </Section>
    </Widget>
  );
}
