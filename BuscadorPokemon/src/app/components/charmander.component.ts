import { Component } from '@angular/core';

@Component({
  selector: 'app-charmander',
  standalone: true,
  template: `<button class="pokemon-name" type="button" (click)="mostrarNombre()">{{ nombreVisible ? nombre : 'Haz clic: ' + nombre }}</button>`,
})
export class CharmanderComponent {
  nombre = 'Charmander';
  nombreVisible = false;

  mostrarNombre(): void {
    this.nombreVisible = true;
  }
}
