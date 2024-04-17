import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CapturedPokemonService {
  private capturedPokemonIds: number[] = [];

  constructor() {}

  isPokemonCaptured(pokemonId: number): boolean {
    return this.capturedPokemonIds.includes(pokemonId);
  }

  toggleCaptureStatus(pokemonId: number): void {
    if (this.isPokemonCaptured(pokemonId)) {
      this.capturedPokemonIds = this.capturedPokemonIds.filter((id) => id !== pokemonId);
    } else {
      this.capturedPokemonIds.push(pokemonId);
    }
  }

  getCapturedPokemonIds(): number[] {
    return this.capturedPokemonIds;
  }
}

