import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  Button,
  CardFooter,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { RecipesStyled } from "./RecipesStyled";
import { food } from "../../data/Food";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import page1 from "../../assets/recipes/mexican-tamales.jpg";
import page2 from "../../assets/recipes/honduran-fries.jpg";
import page3 from "../../assets/recipes/rice-with-peruvian-pork.jpg";
import page4 from "../../assets/recipes/arm-of-chilean-queen.jpg";
import page5 from "../../assets/recipes/boricua-corn-cakes.jpg";
import page6 from "../../assets/recipes/canary-islands-crazy-potatoes.jpg";
import page7 from "../../assets/recipes/peruvian-lentil-stew.jpg";
import page8 from "../../assets/recipes/boricua-potato-salad.jpg";
import page9 from "../../assets/recipes/mexican-beef-stew.jpg";
import page10 from "../../assets/recipes/honduran-macheteadas.jpg";
import RecipeModal from "../../components/RecipeModal";

const images = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
];

const Recipes = () => {
  const [page, setPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const clickRigthButton = () => {
    if (page !== food.length) {
      setPage(page + 1);
    }
  };
  const clickLeftButton = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  return (
    <RecipesStyled>
      <RecipeModal isOpen={isOpen} onClose={onClose} image={images[page - 1]} />
      <SwitchTransition>
        <CSSTransition
          key={page}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <Card className="book">
            <CardHeader className="book-header">
              <Heading className="tittle" size="xl">
                {food[page - 1].name}
              </Heading>
            </CardHeader>
            <CardBody className="book-body">
              <Stack className="center" spacing="4" pb={"4"}>
                <Box className="page-left">
                  <Box className="center">
                    <img
                      className="image"
                      src={images[page - 1]}
                      alt=""
                      onClick={onOpen}
                    />
                  </Box>
                  <Text className="center description">Ingredients:</Text>
                  <Box className="description">
                    <Box>
                      {food[page - 1].ingredients.map((ingredient, i) => (
                        <Text className="item" key={i}>
                          -{ingredient}
                        </Text>
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Text className="center description">Steps:</Text>
                    <Box className="description">
                      <Box>
                        {food[page - 1].steps.map((step, i) => (
                          <Text className="item" key={i}>
                            -{step}
                          </Text>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </CardBody>
            <CardFooter className="book-footer">
              <ButtonGroup className="btn-group">
                <Button
                  id="left"
                  variant="solid"
                  colorScheme="orange"
                  onClick={clickLeftButton}
                >
                  <ChevronLeftIcon boxSize={8} />
                </Button>
                <Text>Page {page}/10</Text>
                <Button
                  id="rigth"
                  variant="solid"
                  colorScheme="orange"
                  onClick={clickRigthButton}
                >
                  <ChevronRightIcon boxSize={8} />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </CSSTransition>
      </SwitchTransition>
    </RecipesStyled>
  );
};

export default Recipes;
