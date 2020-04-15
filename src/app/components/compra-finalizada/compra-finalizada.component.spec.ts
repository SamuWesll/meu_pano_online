import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraFinalizadaComponent } from './compra-finalizada.component';

describe('CompraFinalizadaComponent', () => {
  let component: CompraFinalizadaComponent;
  let fixture: ComponentFixture<CompraFinalizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraFinalizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraFinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
