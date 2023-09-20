import { api } from "./api"

export const getPokemons = async (offset: number) => {
    const response = await api.get(`/pokemon?limit=${offset}&offset=0`)
    return response.data
}