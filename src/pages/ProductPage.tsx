import { Container, Heading, Text, Image, Button } from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
import { ErrorCard } from "../components/ErroCard";
import { store } from "../data/products";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const selectedProduct = store.products.find(
    (product) => product.id === parseInt(id)
  );
  const router = useHistory();
  if (!selectedProduct) {
    let timer = 2000;
    setInterval(() => router.push('/'), timer);
    return(<ErrorCard id={parseInt(id)} />);
  }

  const handleDeleteItem = () => {
    const indexOfProduct = store.products.findIndex(item => item.id === parseInt(id));
    store.products.splice(indexOfProduct, 1);
    store.updateLocalStorage();
    router.push('/');
  }

  return (
    <>
      <Button
        colorScheme="teal"
        onClick={() => router.push('/')}
      >
        {`<`}
      </Button>

      <Container
        display="flex"
        w="800px"
        bgColor="teal"
        borderRadius="20px"
      >
        <Image
          w="220px"
          ml="-4"
          backgroundPosition="center center"
          src={selectedProduct?.imgUrl}
        />
        <Container>
          <Heading
            fontSize="26px"
            fontWeight="bold"
            mt="2"
            textAlign="right"
          >
            {selectedProduct?.title}
          </Heading>
          <Text
            mt={20}
            fontSize="24px"
            fontWeight="bold"
            textAlign="right"
          >
            R$ {selectedProduct?.price}
          </Text>
          <Button colorScheme="whiteAlpha"
            onClick={() => handleDeleteItem()}
          >Delete Item</Button>
        </Container>
      </Container>
    </>
  );
}
