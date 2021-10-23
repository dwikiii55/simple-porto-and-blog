import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import AppContainer from "../container/AppContainer";
import ColorModeToggle from "../ui/ColorModeToggle";
import Logo from "../ui/Logo";

const Links = ["Contact", "Projects", "Blog"];

const NavLink = ({ children }) => {
  const router = useRouter();
  return (
    <Link
      onClick={() => router.push(`/${children}`)}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box shadow="sm">
        <AppContainer>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              mr={10}
            />

            <Logo />

            <Spacer />

            <HStack spacing={8}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                alignItems="center"
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
              <ColorModeToggle />
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </AppContainer>
      </Box>
    </>
  );
}
