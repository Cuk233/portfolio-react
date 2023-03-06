import { Box, Flex, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Theme from "./Theme";

const Footer = () => {
  return (
    <Box as="footer" bg={Theme.colors.black[50]} py="8">
      <Flex justifyContent="center">
        <Link
          href="https://www.linkedin.com/in/zaki-mardhi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin size="20" />}
            mx="4"
            my="2"
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Link>
        <Link
          href="https://github.com/Cuk233"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub size="20" />}
            mx="4"
            my="2"
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
