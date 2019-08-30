import React from "react";
import { Text, Heading, Section, Flex, Container, Button } from "../Elements";
import Widget from "./Widget";

const textString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc.";
export default function Welcome(props) {
  return (
    <Widget {...props}>
      <Section bg="pageBackground" py={80} px={20}>
        <Container>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            maxWidth="75%"
            mx="auto"
          >
            <Heading level={2} textStyle="h2" mb={24}>
              Sub Heading
            </Heading>
            <Text textStyle="text" mb={32}>
              {textString}
            </Text>
            <Button variant="primary" px={24}>
              Welcome
            </Button>
          </Flex>
        </Container>
      </Section>
    </Widget>
  );
}
