import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Select,
  InputLeftElement,
  InputGroup
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { store } from "../data/products";

export function CreateItem() {
  const { products } = store;
  const [product, setProduct] = useState({
    id: (products.length && products[products.length-1].id+1) || 1,
    title: '',
    price: '',
    category: 'Lanches',
    imgUrl: '',
  });
  const router = useHistory();

  function handleSubmit(product: any) {
    products.push(product);
    store.updateLocalStorage();
    router.push('/');
  }

  function handleCancel() {
    setProduct({
      ...product,
      title: '',
      price: '',
      category: 'Lanches',
      imgUrl: '',
    });
    router.push('/');
  }

  return (
    <>
      <form>
        <Container>
          <FormControl
            id="title"
            isRequired
          >
            <FormLabel>Title</FormLabel>
            <Input placeholder="Title" value={product.title} onChange={({ target }) => setProduct({ ...product, title: target.value })} />
          </FormControl>
          <FormControl
            id="price"
            isRequired
          >
            <FormLabel>Price</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="R$"
              />
              <Input placeholder="Enter amount" value={product.price} onChange={({ target }) => setProduct({ ...product, price: target.value })} />
              <InputRightElement />
            </InputGroup>
          </FormControl>
          <FormControl
            id="category"
          >
            <FormLabel>Category</FormLabel>
            <Select value={product.category} onChange={({ target }) => setProduct({ ...product, category: target.value })}>
              <option value="Lanches">Snacks</option>
              <option value="Bebidas">Drinks</option>
              <option value="Sobremesas">Desserts</option>
            </Select>
          </FormControl>
          <FormControl id="imgUrl" isRequired>
            <FormLabel>Type Image's Url</FormLabel>
            <Input placeholder="URL" value={product.imgUrl} onChange={({ target }) => setProduct({ ...product, imgUrl: target.value })} />
          </FormControl>
          <Button onClick={() => handleSubmit(product)} type="submit" colorScheme="green">Create</Button>
          <Button onClick={() => handleCancel()} colorScheme="red">Cancel</Button>
        </Container>
      </form>
    </>
  );
}
