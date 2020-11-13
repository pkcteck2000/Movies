export interface IMovies {
    id: number;
    title: string;
    year: number;
    posterImage: string;
    rating: number;
    trailerLink: string;
    description: string;
}

export interface IMarvelMovies {
    id: string;
    title: string;
    description: string;
    resourceURI: string;
    urls: IUrl[];
    startYear: string;
    endYear: string;
    rating: string;
    modified: string;
    thumbnail: IThumbnail;
    characters: ICharacters;
}

export interface ICharacters {
    available: string;
    returned: string;
    collectionURI: string;
}

export interface IThumbnail {
    path: string;
    extension: string;
}

export interface IUrl {
    type: string;
    url: string;
}

export interface IVideo {
    title: string,
    image: string;
    date: string,
    embededId: string,
    description: string,
    catgory: string
}