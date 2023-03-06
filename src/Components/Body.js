import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Theme from "./Theme";
function Body() {
  return (
    <Box maxW="900px" mx="auto" my="4">
      <Text fontSize="5xl" as="b" color={Theme.colors.black[100]}>
        EXPERIENCE
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Box w="45%" p="4">
          <Image
            h="150px"
            src="assets/CI_logo.png"
            alt="Image 1"
            borderRadius="md"
            ml="100px"
          />
          <Text mt="10" fontSize="md" color={Theme.colors.black[100]}>
            my first project on college using CodeIgniter about creating CRUD
            for employee attendance
          </Text>
        </Box>
        <Box w="45%" p="4">
          <Image src="assets/gmf_white.png" alt="Image 2" borderRadius="md" />
          <Text mt="10" fontSize="md" color={Theme.colors.black[100]}>
            three months internship at GMF AeroAsia with project creating
            website for document monitoring and airplane status monitoring using
            CodeIgniter 3 and grabbing data through API
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Body;
