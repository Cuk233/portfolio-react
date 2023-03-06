import {
  Box,
  Text,
  Center,
  Grid,
  GridItem,
  Container,
  Image,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import theme from "./Theme";
function Head() {
  return (
    <Box bg="#111111" w="100%" p={4} color="white">
      <Text fontSize="5xl" color="#e37218" as="b">
        <Center color={theme.colors.black[100]}>Information About Me</Center>
      </Text>
      {"  "}

      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="90px">
        <GridItem>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Python</Th>
                  <Th>PHP</Th>
                  <Th>Web</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Jupyter Notebook</Td>
                  <Td>CodeIgniter</Td>
                  <Td>React JS</Td>
                </Tr>
                <Tr>
                  <Td>Numpy</Td>
                  <Td>API</Td>
                  <Td>Bootstrap</Td>
                </Tr>
                <Tr>
                  <Td>Pandas</Td>
                  <Td></Td>
                  <Td>Chakra UI</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
        <GridItem>
          {" "}
          <Text fontSize="2xl" as="b" color={theme.colors.black[300]}>
            Muhammad Zakki Mardhi
          </Text>
          <Container w="500px" mt="30px" color={theme.colors.black[100]}>
            A person that enthusiastic about learning technology either on the
            hardware or software, but focused on the website and data science
          </Container>
        </GridItem>
      </Grid>
      <Center>
        <Image src="assets/line.png" mt="150px" mb="50px" />
      </Center>
    </Box>
  );
}

export default Head;
