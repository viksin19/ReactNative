import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecomendationComponent } from './food-recomendation.component';

describe('FoodRecomendationComponent', () => {
  let component: FoodRecomendationComponent;
  let fixture: ComponentFixture<FoodRecomendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRecomendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
