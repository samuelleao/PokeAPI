import { PokemonTypes } from "@/globalTypes/pokemon"
import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react"
import { ArrowRight } from "lucide-react"

export interface PokemonCardProps {
    loading?: boolean,
    pokemon: PokemonTypes,
    index: number
}

export const PokemonCard = ({loading, pokemon, index}: PokemonCardProps) => {
    return (
        <Skeleton maxH="240px" isLoaded={!loading} display="flex" role="group" _hover={{ borderColor: "brand.900"} } border={"1px solid transparent"} flexDir="column" flex="1" rounded="lg" alignItems="center" boxShadow="2xl" p="4">
            <Box>
                <Image _groupHover={{transform: "translateY(-50%)"}} transform="translateY(-30%)" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt={pokemon?.name} />
            </Box>
            <Flex w="full" justifyContent="space-between">
                <Text fontSize='sm' _groupHover={{color: 'brand.900' }}>{pokemon?.name}</Text>
                <ArrowRight  strokeWidth={1.75} />
            </Flex>
        </Skeleton>
    )
}