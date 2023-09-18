import { api } from "./api"

export const getPokemons = async () => {
    const response = await api.get("/pokemon")
    return response.data
}