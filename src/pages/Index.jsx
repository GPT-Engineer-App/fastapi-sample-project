import { Container, Text, VStack, Box, Heading, Code, IconButton } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          FastAPI Sample
        </Heading>
        <Text>Below is a sample code snippet for creating a simple FastAPI application in Python:</Text>
        <Box width="100%" bg="gray.100" p={4} borderRadius="md">
          <Code display="block" whiteSpace="pre">
            {`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}`}
          </Code>
        </Box>
        <IconButton aria-label="Launch" icon={<FaRocket />} size="lg" />
      </VStack>
    </Container>
  );
};

export default Index;
