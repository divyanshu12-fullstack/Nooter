import { Container, Flex, Button, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";

function Navbar() {
  return (
    <Container
      maxW="1400px"
      px={{ base: 3, md: 5 }}
      py={3}
      borderBottomWidth="2px"
    >
      <Flex
        h={{ base: "auto", sm: 16 }}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
        gap={{ base: 3, sm: 0 }}
      >
        <Text
          fontSize={{ base: "20px", sm: "24px", md: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to="/">Nooter 📒</Link>
        </Text>
        <Stack
          direction="row"
          spacing={{ base: 2, md: 3 }}
          alignItems="center"
          mt={{ base: 2, sm: 0 }}
        >
          <Link to="/create">
            <Button size={{ base: "sm", md: "md" }}>
              <FaRegPlusSquare fontSize={18} />
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Container>
  );
}

export default Navbar;
