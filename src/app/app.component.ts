import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CapturedPokemonService } from './captured-pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-api';
  capturedPokemonIds: number[] = [];
  allPokemonList: any[] = [];
  selectedPokemon: any | null = null;

  constructor(
    private capturedPokemonService: CapturedPokemonService,
    private http: HttpClient
  ) {
    this.capturedPokemonIds = this.capturedPokemonService.capturedPokemonIds;
    this.fetchAllPokemon();
  }

  // Método para obtener la lista de todos los Pokémones
  fetchAllPokemon() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((response: any) => {
        this.allPokemonList = response.results;
      });
  }

  // Método para marcar un Pokémon como capturado o liberado
  toggleCaptureStatus(pokemonId: number) {
    this.capturedPokemonService.toggleCaptureStatus(pokemonId);
    this.updateCapturedPokemonIds(); // Actualizar array de IDs capturados
  }

  // Método para actualizar el array de IDs de Pokémones capturados
  updateCapturedPokemonIds() {
    this.capturedPokemonIds = this.capturedPokemonService.capturedPokemonIds;
  }

  // Método para seleccionar un Pokémon
  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
  }

  // Método para mostrar la información del Pokémon seleccionado en la interfaz de usuario
  showPokemonDetails(pokemon: any) {
    // Implementar la lógica para mostrar la información del Pokémon en la interfaz de usuario
    // Puedes utilizar interpolación de datos, directivas de Angular o componentes personalizados.
    console.log('Información del Pokémon seleccionado:', pokemon);
  }

  // Método para filtrar la lista de Pokémones según criterios
  filterPokemonList(filterCriteria: string) {
    // Implementar la lógica para filtrar la lista de Pokémones según el criterio especificado
    // Puedes utilizar métodos de array como `filter`, `find`, etc. para filtrar la lista.
    console.log('Filtrar lista de Pokémones por:', filterCriteria);
  }
}
