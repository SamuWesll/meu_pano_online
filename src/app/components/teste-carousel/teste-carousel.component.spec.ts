import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCarouselComponent } from './teste-carousel.component';

describe('TesteCarouselComponent', () => {
  let component: TesteCarouselComponent;
  let fixture: ComponentFixture<TesteCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
