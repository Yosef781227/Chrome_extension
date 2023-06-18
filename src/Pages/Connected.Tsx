import { Container, Image, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { DotsThreeOutline } from "phosphor-react";



export default function Connected() {
  return (
  <>
     <Container
          height={"150px"}
          width={"316"}
          bg={"white"}
          mt={"25px"}
          borderWidth="1px"
          borderRadius="lg"
        >
          <Text mt={"16px"} fontWeight={"bold"} fontSize={"md"}>
            Connected IG account (s)
          </Text>
          <HStack pt={"16px"} align="start">
            <Image mt={2} src="./account.png" height={"40px"} w={"40px"} />
            <VStack align="start" spacing={0}>
              <HStack spacing={5}>
                <Text fontWeight={"bold"} fontSize={"md"}>
                  beyond_lore
                </Text>{" "}
                <DotsThreeOutline size={24} color="neutral.200" weight="fill" />{" "}
              </HStack>
              <Text fontWeight={"regular"} fontSize={"sm"}>
                beyond_lore
              </Text>
            </VStack>
          </HStack>
        </Container>
  
        <Container
          height={"150px"}
          width={"316"}
          bg={"white"}
          mt={"25px"}
          borderWidth="1px"
          borderRadius="lg"
        >
          <Text mt={"16px"} fontWeight={"bold"} fontSize={"md"}>
            Connected TikTok account (s)
          </Text>
          <HStack pt={"16px"} align="start">
            <Image mt={2} src="./account.png" height={"40px"} w={"40px"} />
            <VStack align="start" spacing={0}>
              <HStack spacing={5}>
                <Text fontWeight={"bold"} fontSize={"md"}>
                  beyond_lore
                </Text>{" "}
                <DotsThreeOutline size={24} color="neutral.200" weight="fill" />{" "}
              </HStack>
              <Text fontWeight={"regular"} fontSize={"sm"}>
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
            height={"45px"}
            fontSize={"sm"}
            
            fontWeight={"regular"}
          >
            View content
          </Button>

       

      
     
  </>
  )
}
