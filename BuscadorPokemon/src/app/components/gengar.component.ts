import { Component } from '@angular/core';

@Component({
  selector: 'app-gengar',
  standalone: true,
  template: `<button class="pokemon-name" type="button" (click)="mostrarNombre()">{{ nombreVisible ? nombre : 'Haz clic: ' + nombre }}</button>`,
})
export class GengarComponent {
  nombre = 'Gengar';
  nombreVisible = false;

  mostrarNombre(): void {
    this.nombreVisible = true;
  }
}
