import { PokemonTypes } from "@/globalTypes/pokemon";
import { getPokemon } from "@/services/getPokemon";
import { getPokemonImage } from "@/services/getPokemonImage";
import { Box, Button, Container, Flex, Grid, Image, Progress, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

export const Pokemon = () => {

    let { name } = useParams();

    const history = useNavigate()

    const { data: pokemon } = useQuery<PokemonTypes>("pokemon", async () => getPokemon(name))

    const backToPrevPage = () => {
        history(-1)
    }

    const analyticsStats = (base_stat: number) => {
        if (base_stat > 50) {
            return "green"
        }
        return "red"
    }

    return (
        <Grid gridTemplateColumns={{base: "1fr", lg: "repeat(2, 1fr)"}} gridTemplateRows={{base: "50vh 1fr", lg: "1fr"}} bg="brand.800" h={{base: "auto", lg:"100vh"}} >
            <Flex position="relative" alignItems="center" justifyContent="center">
                <Button bg="whiteAlpha.400" color="white" _hover={{ bg: "whiteAlpha.500" }} position="absolute" top="1rem" left="1rem" onClick={backToPrevPage}>Voltar</Button>
                <Image
                    position="sticky"
                    top={0}
                    src={`${getPokemonImage(pokemon?.id)}`}
                    alt={pokemon?.name} />
            </Flex>
            <Box bg="white" rounded={{base:12, lg: 0}}>
                <Container>
                    <Text py={{base:"10", lg:"20"}} fontSize={{base: "2xl",lg:"4xl"}} as="h1">{pokemon?.name}</Text>
                    <Flex mb="20" gap="4">
                        <Flex gap="4" fontWeight={600}> <Text as="span" color="brand.900">Altura</Text><Text as="span">{pokemon?.height}</Text></Flex>
                        <Flex gap="4" fontWeight={600}> <Text as="span" color="brand.900">Peso</Text><Text as="span">{pokemon?.weight}</Text></Flex>
                    </Flex>
                    {pokemon?.stats.map((item) => (
                        <Flex key={item.stat.name} alignItems={{base: "start", lg:"center"}} gap="8" mb="8">
                            <Text flex="1" fontSize={{base: "xs" , lg:"base"}} >{item.stat.name}</Text>
                            <Text fontSize={{base: "xs" , lg:"sm"}} color="gray.500">{item.base_stat} %</Text>
                            <Progress flex={1} colorScheme={analyticsStats(item.base_stat)} size='md' value={item.base_stat} />
                        </Flex>
                    ))}
                </Container>
            </Box>
        </Grid>
    )
}