import { Box } from "@chakra-ui/layout";
import React from "react";
import AppLayout from "../components/layout/AppLayout";
import ProjectComp from "../components/project/ProjectComp";

function Project() {
  return (
    <div>
      <AppLayout>
        <Box m={10} />

        <ProjectComp />
      </AppLayout>
    </div>
  );
}

export default Project;
