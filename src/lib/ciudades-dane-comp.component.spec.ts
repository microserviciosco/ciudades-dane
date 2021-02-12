import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesDaneCompComponent } from './ciudades-dane-comp.component';

describe('CiudadesDaneCompComponent', () => {
  let component: CiudadesDaneCompComponent;
  let fixture: ComponentFixture<CiudadesDaneCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadesDaneCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesDaneCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
