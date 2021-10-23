import { Box } from "@chakra-ui/layout";
import React from "react";
import BlogPosts from "../components/Blog/BlogPosts";
import AppLayout from "../components/layout/AppLayout";

function Blog() {
  return (
    <div>
      <AppLayout>
        <Box m={10} />
        <BlogPosts />
      </AppLayout>
    </div>
  );
}

export default Blog;
