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
import { useHistory, useParams } from "react-router-dom";

import { Product, store } from "../data/products";

export function EditItem() {
  const { id } = useParams<{ id: string }>();
  const { products } = store;
  const router = useHistory();

  const [productToEdit, setProductToEdit] = useState({...products.find(product => product.id === parseInt(id))});

  function handleSubmit() {
    // TODO
    const newProducts: Product[] | any = products.map(item => {
      if (item.id === parseInt(id)) {
        return productToEdit;
      }
      return item;
    });
    store.products = newProducts;
    store.updateLocalStorage();
    router.push('/');
  }

  function handleCancel() {
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
            <Input
              placeholder="Title"
              value={productToEdit?.title}
              onChange={({target}) => setProductToEdit({ ...productToEdit, title: target.value })}
            />
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
              <Input
                placeholder="Enter amount"
                value={productToEdit?.price}
                onChange={({target}) => setProductToEdit({ ...productToEdit, price: target.value })}
              />
              <InputRightElement />
            </InputGroup>
          </FormControl>
          <FormControl
            id="category"
          >
            <FormLabel>Category</FormLabel>
            <Select
              value={productToEdit?.category}
              onChange={({ target }) => setProductToEdit({ ...productToEdit, category: target.value })}
            >
              <option value="Lanches">Snacks</option>
              <option value="Bebidas">Drinks</option>
              <option value="Sobremesas">Desserts</option>
            </Select>
          </FormControl>
          <FormControl id="imgUrl" isRequired>
            <FormLabel>Type Image's Url</FormLabel>
            <Input placeholder="URL" value={productToEdit?.imgUrl} onChange={({ target }) => setProductToEdit({ ...productToEdit, imgUrl: target.value })} />
          </FormControl>
          <Button onClick={() => handleSubmit()} type="submit" colorScheme="green">Alterar</Button>
          <Button onClick={() => handleCancel()} colorScheme="red">Cancel</Button>
        </Container>
      </form>
    </>
  );
}
