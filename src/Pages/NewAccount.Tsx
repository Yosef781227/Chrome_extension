import {Text, VStack,Container,HStack,Image,Button} from "@chakra-ui/react"

export default function NewAccount() {
  return (
   <>
  
        <Text mt={"20px"}  fontWeight={"bold"} fontSize={"md"}>
           Please confirm you want to connect  <br/>this account?
          </Text>
          <Container
          height={"100px"}
          width={"300"}
          
          bg={"white"}
          mt={"25px"}
          borderWidth="1px"
          borderRadius="lg"
        >
          
          <HStack pt={"16px"} align="start" mt={"10px"}>
            <Image mt={2} src="./account.png" height={"40px"} w={"40px"} />
            <VStack align="start" spacing={0}>
              <HStack spacing={5}>
                <Text fontWeight={"bold"} fontSize={"md"}>
                  beyond_lore
                </Text>{" "}
              
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
            height={"50px"}
            fontSize={"sm"}
            
            fontWeight={"regular"}
          >
            Confirm
          </Button>
        
   </>
  )
}
