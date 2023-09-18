export interface PokemonTypes {
    name: string,
    image: string,
    url: string,
    moves: Move[],
}

interface Move {
    move: Ability;
    version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
    level_learned_at: number;
    move_learn_method: Ability;
    version_group: Ability;
}

interface Ability {
    name: string;
    url: string;
}