import { Box } from "@chakra-ui/layout";
import React from "react";
import ContactMe from "../components/contact/ContactMe";
import AppLayout from "../components/layout/AppLayout";

function Contact() {
  return (
    <div>
      <AppLayout>
        <Box m={10} />
        <ContactMe />
      </AppLayout>
    </div>
  );
}

export default Contact;
