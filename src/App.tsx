import { Container, Box, Image} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Connected from "./Pages/Connected";
import DisConnected from "./Pages/DisConnected";
import Error from "./Pages/Error";
import NewAccount from "./Pages/NewAccount";
import Succes from "./Pages/Succes";
import Reconnect from "./Pages/Reconnect";


const App = () => {
  return (
    <Container maxW="400px" w="400px" p={4}  alignContent={"center"} bg={"neutral.50"}>
      <Box ml={"120px"} mt={"15px"}>
        <Image  src="/icon.png" alt="logo" height={"70px"} width={"130px"}   />
      </Box>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connected" element={<Connected />} />
          <Route path="/DisConnected" element={<DisConnected />} />
          <Route path="/Error"  element={<Error/>} />
          <Route path="/NewAccount" element={<NewAccount />} />
          <Route path="/Succes" element={<Succes />} />
          <Route path="/Reconnect" element={<Reconnect />} />
          
           
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
