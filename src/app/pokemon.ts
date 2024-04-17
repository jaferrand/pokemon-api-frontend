export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    types: Type[]
  }

  export interface Type {
    type: string;
    name: string;
  }