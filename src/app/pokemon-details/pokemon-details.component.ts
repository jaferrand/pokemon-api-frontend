
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html', // Path to your HTML template
  styleUrls: ['./pokemon-details.component.css'] // Path to your CSS stylesheet
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined; // Input property for receiving the Pokemon object

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    // Retrieve the 'id' parameter from the current route
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);

    // Fetch the Pokemon data using HttpClient
    this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .subscribe(pokemonData => {
        this.pokemon = pokemonData; // Assign fetched Pokemon data to 'pokemon' property
      }, error => {
        console.error('Error fetching Pokemon:', error); // Handle error
      });
  }
}
