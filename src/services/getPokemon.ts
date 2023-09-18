import { api } from "./api"

export const getPokemon = async (name?: string) => {
    const response = await api.get(`/pokemon/${name}`)
    return response.data
}