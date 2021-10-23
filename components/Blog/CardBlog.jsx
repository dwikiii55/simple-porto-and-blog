import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import TagArtikel from "./TagArtikel";

function CardBlog() {
  return (
    <VStack
      cursor="pointer"
      _hover={{ shadow: "md", pos: "relative", top: "-3px" }}
      alignItems="flex-start"
      minH="75px"
      spacing-={3}
      borderWidth="2px"
      p={4}
      borderRadius="2xl"
    >
      <Heading size="sm">Judul Artikel</Heading>
      <Text>
        Ini merupakan preview awal terkait kalimat utama dari blog post yang
        telah dibuat . . .
      </Text>
      <HStack>
        <TagArtikel>Front End</TagArtikel>
        <TagArtikel>Desain</TagArtikel>
      </HStack>
    </VStack>
  );
}

export default CardBlog;
