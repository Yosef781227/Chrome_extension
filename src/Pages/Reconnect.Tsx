import {Text, VStack,Container,HStack,Image,Button} from "@chakra-ui/react"
import { DotsThreeOutline } from "phosphor-react";
export default function Reconnect() {
  return (
    <>
    <HStack mt={"25px"} ml={"4px"} align={"start"}>
         
          <Text fontWeight="bold" fontSize="md" >
          ♻️ Please confirm you want to  <br/>reconnect the following account?
          </Text>
        </HStack>
     <Container
      height={"80px"}
      width={"300"}
      bg={"white"}
     mt={"5px"}
      borderWidth="1px"
      borderRadius="lg"
      p={4} 
    >

        <HStack align="start">
          <Image src="./account.png" boxSize={10}  mt={2}/>
          <VStack align="start" spacing={1}>
            <HStack spacing={5}>
            <Text fontWeight="bold" fontSize="md">
              beyond_lore
            </Text>
            {" "}
                <DotsThreeOutline size={24} color="neutral.200" weight="fill" />{" "}
            </HStack>
            <Text fontWeight="regular" fontSize="sm">
              beyond_lore
            </Text>
          </VStack>
        </HStack>
    
    </Container>

    <Button
            bg="primary.400"
            color={"white"}
            mt={"20px"}
          
            width={"370px"}
            height={"50px"}
            fontSize={"sm"}
            
            fontWeight={"regular"}
          >
            Confirm
          </Button>
    
    </>
  )
}
