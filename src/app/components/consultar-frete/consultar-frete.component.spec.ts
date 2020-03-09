import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFreteComponent } from './consultar-frete.component';

describe('ConsultarFreteComponent', () => {
  let component: ConsultarFreteComponent;
  let fixture: ComponentFixture<ConsultarFreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarFreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarFreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
