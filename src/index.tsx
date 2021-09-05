import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, Heading, HStack } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./data/products";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <HStack
          p={4}
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          <Heading
            w="100%"
            size="lg"
            fontWeight="bold"
            textAlign="center"
          >
            {store.title}
          </Heading>
        </HStack>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
