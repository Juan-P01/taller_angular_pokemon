import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import type { Observable } from "rxjs"
import { map } from "rxjs/operators"

// Forma reducida de la respuesta de la PokeAPI que nos interesa.
interface PokeApiResponse {
  name: string
  sprites: {
    front_default: string | null
    other?: {
      "official-artwork"?: {
        front_default: string | null
      }
    }
  }
}

export interface Pokemon {
  name: string
  image: string
}

@Injectable({ providedIn: "root" })
export class PokemonService {
  private readonly baseUrl = "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) {}

  getPokemon(nameOrId: string): Observable<Pokemon> {
    const query = encodeURIComponent(nameOrId.trim().toLowerCase())

    return this.http.get<PokeApiResponse>(`${this.baseUrl}/${query}`).pipe(
      map((res) => ({
        name: res.name,
        image:
          res.sprites.other?.["official-artwork"]?.front_default ??
          res.sprites.front_default ??
          "",
      })),
    )
  }
}
