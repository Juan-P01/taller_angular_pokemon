import { Component } from '@angular/core';

@Component({
  selector: 'app-giratina',
  standalone: true,
  template: `<button class="pokemon-name" type="button" (click)="mostrarNombre()">{{ nombreVisible ? nombre : 'Haz clic: ' + nombre }}</button>`,
})
export class GiratinaComponent {
  nombre = 'Giratina';
  nombreVisible = false;

  mostrarNombre(): void {
    this.nombreVisible = true;
  }
}
