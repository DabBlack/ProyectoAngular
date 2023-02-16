import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaImagenComponent } from './carta-imagen.component';

describe('CartaImagenComponent', () => {
  let component: CartaImagenComponent;
  let fixture: ComponentFixture<CartaImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
