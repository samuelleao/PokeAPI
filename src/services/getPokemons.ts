import { api } from "./api"

export const getPokemons = async () => {
    const response = await api.get("/pokedex")
    return response.data
}