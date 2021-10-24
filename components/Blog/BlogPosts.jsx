import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import CardBlog from "./CardBlog";
import TagArtikel from "./TagArtikel";

function BlogPosts() {
  return (
    <>
      <Heading mb={3}>Blog </Heading>
      <Text mb={5} fontSize={{ base: "lg", md: "xl" }}>
        Sharing is beautiful ✨.
      </Text>
      <HStack>
        <TagArtikel>Front End</TagArtikel>
        <TagArtikel>Back End</TagArtikel>
        <TagArtikel>React</TagArtikel>
        <TagArtikel>Toko Online</TagArtikel>
      </HStack>
      <Box m={5} />
      <CardBlog />
    </>
  );
}

export default BlogPosts;
