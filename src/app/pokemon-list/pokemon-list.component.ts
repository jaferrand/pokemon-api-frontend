import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapturedPokemonService } from '../captured-pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];
  capturedPokemonIds: number[] = [];

  constructor(private http: HttpClient, @Inject(CapturedPokemonService) private capturedPokemonService: CapturedPokemonService) {
    this.getPokemons();
    this.capturedPokemonIds = this.capturedPokemonService.getCapturedPokemonIds();
  }

  private getPokemons() {
    // Implement the logic to fetch the list of Pokemon from an API or service
    // Example:
    this.http.get<ApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=150')
      .subscribe(response => {
        if (response.results) {
          this.pokemons = response.results;
        } else {
          console.error('Unexpected API response structure');
        }
      }, error => {
        console.error('Error fetching Pokemon list:', error);
      });
  }

  isPokemonCaptured(pokemonId: number): boolean {
    return this.capturedPokemonIds.includes(pokemonId);
  }

  toggleCaptureStatus(pokemonId: number): void {
    this.capturedPokemonService.toggleCaptureStatus(pokemonId);
    this.capturedPokemonIds = this.capturedPokemonService.getCapturedPokemonIds();
  }

  capturePokemon(pokemon: Pokemon): void {
    this.toggleCaptureStatus(pokemon.id);
  }

  releasePokemon(pokemon: Pokemon): void {
    this.toggleCaptureStatus(pokemon.id);
  }
}

// Define la interfas para  API 
interface ApiResponse {
  results: Pokemon[];
}
