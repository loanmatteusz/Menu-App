import {
  CircularProgress,
  Container,
} from "@chakra-ui/react";

type Props = {
  id: number;
};

export function ErrorCard(props: Props) {
  return (
    <Container
      mt={10}
      height="100%"
      colorScheme="red"
      textAlign="center"
      fontSize="30px"
    >
      <CircularProgress isIndeterminate color="teal.300" />
      <h1>
        The id: {props.id} not Exists!
      </h1>
    </Container>
  );
}
