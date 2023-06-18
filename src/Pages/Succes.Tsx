import {Text, VStack,Container,HStack,Image,Button} from "@chakra-ui/react"
import { DotsThreeOutline } from "phosphor-react";

export default function Succes() {
  return (
    <>
       
       <Container
      height={"130px"}
      width={"300"}
      bg={"white"}
      mt={"25px"}
      borderWidth="1px"
      borderRadius="lg"
      p={4} 
    >
      <VStack align="start" spacing={2} mt={3}>
       
         
          <Text fontWeight="bold" fontSize="md">
          ✅ Connected IG account (s)
          </Text>
       

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
      </VStack>
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
            View Content
          </Button>

          <Text mt={"20px"} ml={"5px"} fontWeight={"thin"} fontSize={"xs"}>
          Hint: you can add a new account by logging in to <br/> that account and opening this chrome  extension <br/>like this

          </Text>
    </>
  )
}
