import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebtrenadores } from './ebtrenadores';

describe('Ebtrenadores', () => {
  let component: Ebtrenadores;
  let fixture: ComponentFixture<Ebtrenadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ebtrenadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ebtrenadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
