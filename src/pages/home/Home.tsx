import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { HomeStyled } from "./HomeStyled";
import homePicture from "../../assets/home-picture.png";
const Home = () => {
  return (
    <HomeStyled>
      <Card className="book">
        <CardHeader className="book-header">
          <Heading className="tittle" size="xl">
            Cook Book
          </Heading>
        </CardHeader>
        <CardBody className="book-body">
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <img src={homePicture} alt="" />
              <Text pt="4" fontSize="2xl">
                This is a book of Latin foods
              </Text>
            </Box>
            <Box>
              <Button className="btn-open" colorScheme="orange">
                <a href="/recipes">Open</a>
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </HomeStyled>
  );
};

export default Home;
