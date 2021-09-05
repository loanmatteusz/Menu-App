import { EditIcon } from "@chakra-ui/icons";
import {
  Text,
  Heading,
  VStack,
  HStack,
  Badge,
  Image,
  Box,
  Button,
  Container
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  category: string;
  price: string;
  imgUrl: string;
};

export function ProductCard(props: Props) {
  const router = useHistory();
  return (
    <HStack
      mt={2}
      cursor="pointer"
      borderRadius="md"
      color="teal.500"
      align="flex-start"
      w="370px"
      _hover={{
        background: "teal.500",
        color: "white",
        transition: ".5s"
      }}
    >
      <Box
        borderRadius="md"
        width="180px"
        height="142px"
        overflow="hidden"
        onClick={() => router.push(`/${props.id}`)}
      >
        <Image
          width="100%"
          height="100%"
          backgroundPosition="center center"
          src={props.imgUrl}
        />
      </Box>
      <VStack
        align="flex-start"
        w="80%"
      >
        <Heading
          color="gray.700"
          fontSize="18px"
          cursor="pointer"
          onClick={() => router.push(`/${props.id}`)}
          mt="1"
          maxW="95%"
          _hover={{
            color: "white"
          }}
        >
          {props.title}
        </Heading>
        <Container
          mb="-4"
          w="98%"
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
        >
          <HStack
            cursor="auto"
            ml="-4"
          >
            <Badge colorScheme="blue">{props.category}</Badge>
            <Text fontWeight="semibold">R$ {props.price}</Text>
          </HStack>
          <Button
            mt="12"
            colorScheme="green.50"
            size="md"
            variant="ghost"
            onClick={() => router.push(`/edit/${props.id}`)}
          >
            <EditIcon />
          </Button>
        </Container>
      </VStack>
    </HStack>
  );
}
