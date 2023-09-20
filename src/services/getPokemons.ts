import { api } from "./api"

export const getPokemons = async (limit: number) => {
    const response = await api.get(`/pokemon?limit=${limit}&offset=0`)
    return response.data
}