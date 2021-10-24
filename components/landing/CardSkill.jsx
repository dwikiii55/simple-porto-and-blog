import { SimpleGrid, Text, VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";

const bahasa = [
  { nama: "Html & Css", color: "orange.200" },
  { nama: "Javascript", color: "yellow.200" },
  { nama: "PHP", color: "blue.200" },
  { nama: "Python", color: "purple.200" },
  { nama: "English", color: "blue.200" },
  { nama: "Bahasa", color: "red.200" },
];

const frontEnd = [
  { nama: "ReactJs", color: "blue.200" },
  { nama: "NextJs", color: "gray.200" },
  { nama: "React Native", color: "blue.200" },
  { nama: "Chakra UI", color: "teal.200" },
  { nama: "Bootstrap", color: "purple.200" },
  { nama: "Material UI", color: "blue.200" },
];

const backEnd = [
  { nama: "NodeJs", color: "green.200" },
  { nama: "ExpressJs", color: "gray.200" },
  { nama: "Mongodb", color: "green.200" },
  { nama: "MySQL", color: "orange.200" },
  { nama: "RestAPI", color: "yellow.200" },
];

const cms = [
  { nama: "Wordpress", color: "gray.200" },
  { nama: "StrapiJs", color: "blue.200" },
];

const tools = [
  { nama: "Visual Studio Code", color: "blue.200" },
  { nama: "Git", color: "orange.200" },
  { nama: "GitHub", color: "gray.200" },
  { nama: "Figma", color: "red.200" },
  { nama: "Vercel", color: "gray.200" },
  { nama: "Heroku", color: "blue.200" },
];

function Card({ judul, contents }) {
  return (
    <VStack
      _hover={{ position: "relative", top: "-3px" }}
      borderWidth="2px"
      borderRadius="2xl"
      p={4}
      alignItems="flex-start"
    >
      <Text fontWeight="semibold" mb={2} fontSize="md">
        {judul}{" "}
      </Text>
      <Wrap>
        {contents.map((content, index) => (
          <WrapItem key={index}>
            <Tag bg={content.color}>{content.nama}</Tag>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
}

function CardSkill() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
        <Card judul="Language" contents={bahasa} />
        <Card judul="FrontEnd" contents={frontEnd} />
        <Card judul="BackEnd" contents={backEnd} />
        <Card judul="CMS" contents={cms} />

        <Card judul="Tools" contents={tools} />
      </SimpleGrid>
    </>
  );
}

export default CardSkill;
