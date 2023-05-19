export interface Hero {
    id: string;
    superhero: string;
    alter_ego: string;
    characters: string;
    first_appearance: string;
    publisher: Publisher;
    alt_img?: string;
}

export enum Publisher {
    DCComics = "DC Comics",  
    MarvelComics = "Marvel Comics",
}