import {
  Box,
  Center,
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
import Img from "next/image";
import { Image } from "@chakra-ui/image";

const projectLists = [
  {
    judul: "Simple Porto and Blog Web",
    desc: "Website berisi portofolio dan blog pribadi.",
    link: "https://github.com/dwikiii55/simple-porto-and-blog",
    tag: ["NextJs", "MDX"],
    img: "https://res.cloudinary.com/dvqgkokld/image/upload/v1635070912/porto-blog_hq0kyj.png",
  },
  {
    judul: "E-Rapat PTI",
    desc: "Aplikasi rapat untuk diimplementasikan pada Pusat Teknologi Informasi PPATK.",
    link: "https://github.com/dwikiii55/e-rapat",
    tag: ["NextJs", "Strapi"],
    img: "https://res.cloudinary.com/dvqgkokld/image/upload/v1635068970/e-rapat_nls2rr.png",
  },
];

function CardProject({ link, judul, desc, tags, img }) {
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
          minH="280px"
          borderRadius="2xl"
        >
          <Box
            as={Center}
            borderRadius="xl"
            h="150px"
            bg="white"
            borderWidth="1px"
          >
            <Img
              as={Image}
              borderRadius="xl"
              h="150px"
              bg="gray.200"
              borderWidth="1px"
              width="280"
              height="148px"
              quality={20}
              src={img}
            />
          </Box>
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
      <Heading mb={3}>My Projects</Heading>
      <Text fontSize="xl">The work I have done 🚀.</Text>
      <Box m={5} />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={5}>
        {projectLists.map((list, index) => (
          <CardProject
            key={index}
            link={list.link}
            judul={list.judul}
            desc={list.desc}
            tags={list.tag}
            img={list.img}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ProjectComp;
