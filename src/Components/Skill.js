import React from "react";
import { Box, Text, Image, Center } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Theme from "./Theme";

const Skill = () => {
  return (
    <Box bg="#111111" w="100%" p={4}>
      <Text fontSize="5xl" as="b" color={Theme.colors.black[100]}>
        SKILLS
      </Text>
      <Slide slidesToScroll={2} slidesToShow={2}>
        <Box className="each-slide-effect">
          <Box>
            <Image src="https://www.php.net/images/logos/new-php-logo.png" />
          </Box>
        </Box>

        <Box className="each-slide-effect">
          <Box>
            <Image src="assets/HTML5_Logo_128.png" />
          </Box>
        </Box>
        <Box className="each-slide-effect">
          <Box>
            <Image src="assets/icons8-css3-color-120.png" />
          </Box>
        </Box>
        <Box className="each-slide-effect">
          <Box>
            <Image src="assets/python-logo-only.svg" />
          </Box>
        </Box>
        <Box className="each-slide-effect">
          <Box>
            <Image style={{ width: "128px" }} src="assets/Ci_Logo.png" />
          </Box>
        </Box>
        <Box className="each-slide-effect">
          <Box>
            <Image
              style={{ width: "128px" }}
              src="assets/logo-mysql-170x115.png"
            />
          </Box>
        </Box>
        <Box className="each-slide-effect">
          <Box>
            <Image
              style={{ width: "128px" }}
              src="assets/96018_xampp_icon.png"
            />
          </Box>
        </Box>
        <Box className="each-slide-effect">
          <Box>
            <Image style={{ width: "128px" }} src="assets/react.png" />
          </Box>
        </Box>
      </Slide>
      <Center>
        <Image src="assets/line.png" mt="70px" mb="50px" w="80%" h="100%" />
      </Center>
    </Box>
  );
};
export default Skill;
