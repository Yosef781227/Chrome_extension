import { Container, HStack, Image, Text, VStack, Button } from "@chakra-ui/react"

export default function Error() {
  return (
    <>
      <Container 
          height={"300px"}
          width={"316"}
          bg={"white"}
          mt={"20px"}
          borderWidth="1px"
          borderRadius="lg"
      >
        <VStack align="start" spacing={0} >
         
           
            <Text fontWeight={"bold"} fontSize={"md"} mt={7}>
            ⚠️ Please login to connect your <br />account to skimSocial
            </Text>{" "}
        
          <Text fontWeight={"regular"} fontSize={"sm"} ml={2} mt={5}>
               We’re going to connect the account you’re currently logged in to so please make sure <br />
               you are logged in and then re-open this chrome extension.
          </Text>
          <Button
            bg="primary.400"
            color={"white"}
            mt={"20px"}
            width={"340px"}
            height={"40px"}
            fontSize={"sm"}
            fontWeight={"regular"}
          >
            Try again
          </Button>
        </VStack>
      </Container>
    </>
  )
}
