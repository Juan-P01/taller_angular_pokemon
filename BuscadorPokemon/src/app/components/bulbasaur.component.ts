import { Component } from '@angular/core';

@Component({
  selector: 'app-bulbasaur',
  standalone: true,
  template: `<button class="pokemon-name" type="button" (click)="mostrarNombre()">{{ nombreVisible ? nombre : 'Haz clic: ' + nombre }}</button>`,
})
export class BulbasaurComponent {
  nombre = 'Bulbasaur';
  nombreVisible = false;

  mostrarNombre(): void {
    this.nombreVisible = true;
  }
}
