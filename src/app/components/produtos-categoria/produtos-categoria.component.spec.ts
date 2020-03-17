import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCategoriaComponent } from './produtos-categoria.component';

describe('ProdutosCategoriaComponent', () => {
  let component: ProdutosCategoriaComponent;
  let fixture: ComponentFixture<ProdutosCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
