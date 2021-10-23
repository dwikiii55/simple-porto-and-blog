import { Box, Heading, Text, VStack } from "@chakra-ui/layout";
import React from "react";

function ContactMe() {
  return (
    <div>
      <Box>
        <Heading mb={3}>Hubungi Saya</Heading>

        <Text color="gray.500" mb={5} fontSize={{ base: "lg", md: "xl" }}>
          Jika ada keperluan, saya dengan senang hati untuk dihubungi kapanpun
          😎.
        </Text>

        <VStack
          alignItems="flex-start"
          borderWidth="2px"
          borderRadius="2xl"
          p={4}
        >
          <Text>📞 +62-89606757971</Text>
          <Text>✉ dwiki1968@gmail.com</Text>
          <Text>📌 Jakarta, Indonesia</Text>
        </VStack>
      </Box>
    </div>
  );
}

export default ContactMe;
