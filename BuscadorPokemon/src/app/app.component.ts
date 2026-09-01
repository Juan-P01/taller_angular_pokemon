import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { PokemonService, type Pokemon } from "./pokemon.service"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  query = "ditto"
  pokemon: Pokemon | null = null
  loading = false
  error = ""

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.buscar()
  }

  buscar(): void {
    const term = this.query.trim()
    if (!term) {
      this.error = "Escribe el nombre o número de un Pokémon."
      this.pokemon = null
      return
    }

    this.loading = true
    this.error = ""
    this.pokemon = null

    this.pokemonService.getPokemon(term).subscribe({
      next: (data) => {
        this.pokemon = data
        this.loading = false
      },
      error: () => {
        this.error = `No se encontró ningún Pokémon con "${term}".`
        this.loading = false
      },
    })
  }
}
