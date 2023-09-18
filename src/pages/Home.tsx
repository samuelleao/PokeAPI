import { PokemonCard } from "@/components/PokemonCard"
import { PokemonTypes } from "@/globalTypes/pokemon"
import { getPokemons } from "@/services/getPokemons"
import { Box, Button, Container, Flex, Grid, Image, Input, Text } from "@chakra-ui/react"
import { Fragment } from "react"
import { useQuery } from "react-query"

interface APITypes {
    results: PokemonTypes[]
}

export const Home = () => {

    const { data: pokemons, isLoading, isError } = useQuery<APITypes>('pokemons', getPokemons)

    return (
        <Fragment>
            <Box as="header" bg={"brand.900"} pt="8">
                <Container>
                    <Flex flexDir="column" gap="4" alignItems="center" justifyContent={"center"} w="100%">
                        <Image src="/logo.svg" alt="" />
                        <Input focusBorderColor='brand.800' transform={"translateY(44%)"} bg="white" placeholder="Pesquisar..." />
                    </Flex>
                </Container>
            </Box>
            <Container as="main">
                <Grid gridTemplateColumns="repeat(3,1fr)" gap="8" py="12">
                    {pokemons?.results.map((pokemon, index) => <PokemonCard pokemon={pokemon} index={index} loading={isLoading} />)}
                </Grid>
                <Box>
                    {isError && <Text>Ocorreu algum erro, tente novamente mais tarde</Text>}
                </Box>
            </Container>
            <Box as="footer" pb="8">
                <Container>
                    <Button w="full" bg="brand.900" color="white" _hover={{ bg: "brand.800" }}>Carregar mais</Button>
                </Container>
            </Box>
        </Fragment>
    )
}