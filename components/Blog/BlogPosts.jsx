import { Box, Heading, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import CardBlog from "./CardBlog";
import TagArtikel from "./TagArtikel";

function BlogPosts() {
  return (
    <div>
      <Heading mb={3}>Blog Post</Heading>
      <Text fontSize={{ base: "lg", md: "xl" }}>
        Berbagi merupakan esensi dari indahnya suatu ilmu 🧐.
      </Text>
      <HStack my={2}>
        <TagArtikel>Front End</TagArtikel>
        <TagArtikel>Back End</TagArtikel>
        <TagArtikel>React</TagArtikel>
        <TagArtikel>Toko Online</TagArtikel>
      </HStack>
      <Box m={5} />
      <CardBlog />
    </div>
  );
}

export default BlogPosts;
