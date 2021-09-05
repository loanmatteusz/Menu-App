import { AddIcon } from "@chakra-ui/icons";
import { Container, Grid, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { store } from "../data/products";

export function ProductsPage() {
  const router = useHistory();
  return (
    <>
      <Container
        textAlign="center"
      >
        <Button
          mt={2}
          colorScheme="whiteAlpha"
          color="teal"
          onClick={() => router.push('/create-item')}
          leftIcon={<AddIcon />}
        >
          Add Item
        </Button>
      </Container>
      <Container
        centerContent
        marginBottom="100px"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {store.products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              imgUrl={p.imgUrl}
              title={p.title}
              price={p.price}
              category={p.category}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
