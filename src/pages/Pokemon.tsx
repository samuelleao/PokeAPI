import { PokemonTypes } from "@/globalTypes/pokemon";
import { getPokemon } from "@/services/getPokemon";
import { getPokemonImage } from "@/services/getPokemonImage";
import { Box, Button, Container, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

export const Pokemon = () => {

    let { name } = useParams();

    const history = useNavigate()

    const { data: pokemon } = useQuery<PokemonTypes>("pokemon", async () => getPokemon(name))

    const backToPrevPage = () => {
        history(-1)
    }

    return (
        <Grid gridTemplateColumns="repeat(2, 1fr)" bg="brand.800" h="100vh" >
            <Flex position="relative" alignItems="center" justifyContent="center">
                <Button bg="whiteAlpha.400" color="white" _hover={{ bg: "whiteAlpha.500" }} position="absolute" top="1rem" left="1rem" onClick={backToPrevPage}>Voltar</Button>
                <Image
                    src={`${getPokemonImage(pokemon?.id)}`}
                    alt={pokemon?.name} />
            </Flex>
            <Box bg="white">
                <Container>
                    <Text pt="20" fontSize="2xl" as="h1">{pokemon?.name}</Text>
                </Container>
            </Box>
        </Grid>
    )
}