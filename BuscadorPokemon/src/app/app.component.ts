import { Component } from '@angular/core';
import { PikachuComponent } from './components/pikachu.component';
import { CharmanderComponent } from './components/charmander.component';
import { BulbasaurComponent } from './components/bulbasaur.component';
import { SquirtleComponent } from './components/squirtle.component';
import { GengarComponent } from './components/gengar.component';
import { GiratinaComponent } from './components/giratina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PikachuComponent,
    CharmanderComponent,
    BulbasaurComponent,
    SquirtleComponent,
    GengarComponent,
    GiratinaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
