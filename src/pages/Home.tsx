import { PokemonCard } from "@/components/PokemonCard"
import { PokemonTypes } from "@/globalTypes/pokemon"
import { getPokemons } from "@/services/getPokemons"
import { Box, Button, Container, Flex, Grid, Image, Input, Text } from "@chakra-ui/react"
import { Fragment, useState } from "react"
import { useQuery } from "react-query"

interface APITypes {
    results: PokemonTypes[]
}

export const Home = () => {

    const [pokemonsLimit, setPokemonsLimit] = useState(10)
    const [pokemonsFiltered, setPokemonsFiltered] = useState([])

    const { data: pokemons, isLoading, isError, refetch } = useQuery<APITypes>(['pokemons', pokemonsLimit], async ()=> getPokemons(pokemonsLimit))

    const pokemonsGetMore = () => {
        setPokemonsLimit((prev)=> prev + 10)
        setPokemonsFiltered([])
        refetch()
    }

    const pokemonsSearchFilter = (search: string) => {
        const filtered: any = pokemons?.results.filter((pokemon)=> {
            return pokemon.name.includes(search)
        })
        setPokemonsFiltered(filtered)
    }

    return (
        <Fragment>
            <Box as="header" bg={"brand.900"} pt="8">
                <Container>
                    <Flex flexDir="column" gap="4" alignItems="center" justifyContent={"center"} w="100%">
                        <Image src="/logo.svg" alt="" />
                        <Input focusBorderColor='brand.800' transform={"translateY(44%)"} bg="white" placeholder="Pesquisar..." onChange={(event)=> pokemonsSearchFilter(event.currentTarget.value)} />
                    </Flex>
                </Container>
            </Box>
            <Container as="main">
                <Grid gridTemplateColumns="repeat(3,1fr)" gap="8" py="12">
                    {pokemonsFiltered.length > 0 ? (
                        pokemonsFiltered.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} index={index} loading={isLoading} />)
                    ): pokemons?.results.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} index={index} loading={isLoading} />)}
                </Grid>
                <Box>
                    {isError && <Text>Ocorreu algum erro, tente novamente mais tarde</Text>}
                </Box>
            </Container>
            <Box as="footer" pb="8">
                <Container>
                    <Button w="full" bg="brand.900" color="white" _hover={{ bg: "brand.800" }} onClick={pokemonsGetMore}>{isLoading ? "Carregando..." : "Carregar mais"}</Button>
                </Container>
            </Box>
        </Fragment>
    )
}