import { Routes, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import CreatePages from "./pages/CreatePages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.800")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePages />} />
        </Routes>
      </Box>
    </>
  );
};
export default App;
