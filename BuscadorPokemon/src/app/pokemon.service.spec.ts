import { TestBed } from "@angular/core/testing"
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { PokemonService } from "./pokemon.service"

describe("PokemonService", () => {
  let service: PokemonService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })

    service = TestBed.inject(PokemonService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify()
  })

  it("should encode names with spaces before calling PokeAPI", () => {
    const pokemonName = "Mr Mime"

    service.getPokemon(pokemonName).subscribe((pokemon) => {
      expect(pokemon.name).toBe("mr-mime")
      expect(pokemon.image).toBe("https://example.com/artwork.png")
    })

    const req = httpMock.expectOne(
      "https://pokeapi.co/api/v2/pokemon/mr%20mime",
    )

    expect(req.request.method).toBe("GET")

    req.flush({
      name: "mr-mime",
      sprites: {
        front_default: null,
        other: {
          "official-artwork": {
            front_default: "https://example.com/artwork.png",
          },
        },
      },
    })
  })
})
