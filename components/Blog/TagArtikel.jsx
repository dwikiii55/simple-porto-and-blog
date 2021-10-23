import { Tag } from "@chakra-ui/tag";
import React from "react";

function TagArtikel({ children }) {
  return (
    <>
      <Tag
        cursor="pointer"
        _hover={{ shadow: "md" }}
        onClick={() => alert("oke")}
      >
        {children}
      </Tag>
    </>
  );
}

export default TagArtikel;
