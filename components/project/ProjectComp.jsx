import {
  Box,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";

const projectLists = [
  {
    judul: "Simple Porto and Blog Web",
    desc: "Website berisi portofolio dan blog pribadi.",
    link: "https://github.com/dwikiii55/simple-porto-and-blog",
    tag: ["NextJs", "MDX"],
  },
  {
    judul: "E-Rapat PTI",
    desc: "Aplikasi rapat untuk diimplementasikan pada Pusat Teknologi Informasi PPATK.",
    link: "https://github.com/dwikiii55/e-rapat",
    tag: ["NextJs", "Strapi"],
  },
];

function CardProject({ link, judul, desc, tags }) {
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
            <Wrap>
              {tags.map((tag, index) => (
                <WrapItem key={index}>
                  <Tag size="sm">{tag}</Tag>
                </WrapItem>
              ))}
            </Wrap>
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
        Berkarya adalah suatu bukti eksistensi dari ilmu yang telah dipelajari
        🚀.
      </Text>
      <Box m={5} />
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={5}>
        {projectLists.map((list, index) => (
          <CardProject
            key={index}
            link={list.link}
            judul={list.judul}
            desc={list.desc}
            tags={list.tag}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ProjectComp;
