import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapturedPokemonService {
  getCapturedPokemonIds(): number[] {
    throw new Error('Method not implemented.');
  }
  

  public capturedPokemonIds: number[] = [];
  private MAX_CAPTURED_POKEMON_COUNT = 6; // Límite de Pokémones capturados

  constructor() { }

  isPokemonCaptured(pokemonId: number): boolean {
    return this.capturedPokemonIds.includes(pokemonId);
  }

  toggleCaptureStatus(pokemonId: number): void {
    if (this.isPokemonCaptured(pokemonId)) {
      this.capturedPokemonIds = this.capturedPokemonIds.filter(id => id !== pokemonId);
    } else {
      if (this.capturedPokemonIds.length < this.MAX_CAPTURED_POKEMON_COUNT) {
        this.capturedPokemonIds.push(pokemonId);
      } else {
        // Eliminar el Pokémon capturado con más tiempo de registro
        this.capturedPokemonIds.shift();
        this.capturedPokemonIds.push(pokemonId);
      }
    }
  }
}
