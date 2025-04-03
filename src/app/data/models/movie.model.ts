export interface Movie {
    id: string;
    title: string;
    image: string;
    description?: string;
    genres: Genre[];
    isFavorite: boolean;
    releaseYear?: number;
    rating?: number;
    duration?: number;
}

export interface Genre {
    id: string;
    name: string;
}

export enum MovieActionType {
    Create = 'create',
    Edit = 'edit',
    Delete = 'delete'
}