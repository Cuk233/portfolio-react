import { Box, Flex, Link, Spacer, Center } from "@chakra-ui/react";
import Theme from "./Theme";

const Header = () => {
  return (
    <Box bg={Theme.colors.black[900]} p="4">
      <Center>
        <Flex alignItems="center">
          <Spacer />
          <Box>
            <Link href="/about" mr="4" color={Theme.colors.black[50]}>
              About
            </Link>
            <Link href="/contact" mr="4" color={Theme.colors.black[50]}>
              Contact
            </Link>
            <Link href="/blog" color={Theme.colors.black[50]}>
              Blog
            </Link>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Header;
