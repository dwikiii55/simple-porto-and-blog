import {
  Box,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";

const projectLists = [
  {
    judul: "E-Rapat PTI",
    desc: "Aplikasi rapat untuk diimplementasikan pada Pusat Teknologi Informasi PPATK.",
    link: "https://github.com/dwikiii55/e-rapat",
    tag: ["NextJs", "Strapi"],
  },
];

function CardProject({ link, judul, desc }) {
  return (
    <>
      <Link
        href={link}
        isExternal
        _hover={{
          textDecoration: "none",
        }}
      >
        <VStack
          align="stretch"
          spacing={2}
          p={3}
          maxW="lg"
          borderWidth="2px"
          _hover={{ pos: "relative", top: "-3px" }}
          cursor="pointer"
          minH="200px"
          borderRadius="2xl"
        >
          <Box borderRadius="xl" h="100px" bg="gray.200"></Box>
          <HStack>
            <Tag size="sm">Front End</Tag>
            <Tag size="sm">Mobile</Tag>
          </HStack>

          <Heading size="sm"> {judul}</Heading>
          <Text fontSize="sm">{desc}</Text>
        </VStack>
      </Link>
    </>
  );
}

const ProjectComp = () => {
  return (
    <div>
      <Heading mb={3}>Project</Heading>
      <Text fontSize="xl">
        Dalam mengasah keahlian project nyata adalah sebuah solusi 😁.
      </Text>
      <Box m={5} />
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={5}>
        {projectLists.map((list) => (
          <CardProject link={list.link} judul={list.judul} desc={list.desc} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ProjectComp;
