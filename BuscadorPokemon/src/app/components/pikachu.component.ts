import { Component } from '@angular/core';

@Component({
  selector: 'app-pikachu',
  standalone: true,
  template: `<button class="pokemon-name" type="button" (click)="mostrarNombre()">{{ nombreVisible ? nombre : 'Haz clic: ' + nombre }}</button>`,
})
export class PikachuComponent {
  nombre = 'Pikachu';
  nombreVisible = false;

  mostrarNombre(): void {
    this.nombreVisible = true;
  }
}
