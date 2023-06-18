import { Container, Box, Image, Text, Button } from "@chakra-ui/react";

export default function Home() {
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
        <Box>
          <Image
            src="./Insta.png"
            height={"65px"}
            width={"50px"}
            pt={"16px"}
            ml={"16px"}
          />
          <Text ml={"16px"} mt={"16px"}  fontWeight={"bold"}  fontSize={"lg"}>
            Connect your Instagram
          </Text>
          <Text ml={"16px"} mt={"15px"} fontWeight={"medium"} fontSize={"sm"}>
            You{" "}
            <Text as="span" fontWeight="bold">
              need
            </Text>{" "}
            to be logged in to the account you want to connect then head over to
            Instagram.com
          </Text>

          <Button
            bg="primary.400"
            color={"white"}
            mt={"20px"}
            ml={"16px"}
            width={"300px"}
            height={"38px"}
            fontSize={"sm"}
            
            fontWeight={"regular"}
          >
            Open Instagram.Com
          </Button>
        </Box>
      </Container>

      <Container
        height={"300px"}
        width={"316"}
        bg={"white"}
        mt={"20px"}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Box>
          <Image
            src="./tiktok.png"
            height={"65px"}
            width={"50px"}
            pt={"16px"}
            ml={"16px"}
          />
          <Text ml={"16px"} mt={"16px"}  fontWeight={"bold"}  fontSize={"lg"}>
            Connect your TikTok
          </Text>
          <Text ml={"16px"} mt={"15px"} fontWeight={"medium"} fontSize={"sm"}>
            You{" "}
            <Text as="span" fontWeight="bold">
              need
            </Text>{" "}
            to be logged in to the account you want to connect then head over to
            TikTok.com
          </Text>
          <Button
            bg="primary.400"
            color={"white"}
            mt={"20px"}
            ml={"16px"}
            width={"300px"}
            height={"38px"}
            fontSize={"sm"}
            
            fontWeight={"regular"}
          >
            Open TikTok.Com
          </Button>
        </Box>
      </Container>

      <Container
        height={"330px"}
        width={"316"}
        bg={"white"}
        mt={"20px"}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Box>
        <Text ml={"16px"} mt={"16px"}  fontWeight={"bold"}  fontSize={"lg"}>
            Tutorial
          </Text>
          <Image
            src="./watch.png"
            height={"188px"}
            width={"300px"}
            ml={"16px"}
            mt={"16px"}
          />

<Button
            bg="primary.400"
            color={"white"}
            mt={"20px"}
            ml={"16px"}
            width={"300px"}
            height={"38px"}
            fontSize={"sm"}
            
            fontWeight={"regular"}
          >
            watch
          </Button>
        </Box>
      </Container>
    </>
  );
}
