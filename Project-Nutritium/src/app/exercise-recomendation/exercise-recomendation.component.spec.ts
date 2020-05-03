import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRecomendationComponent } from './exercise-recomendation.component';

describe('ExerciseRecomendationComponent', () => {
  let component: ExerciseRecomendationComponent;
  let fixture: ComponentFixture<ExerciseRecomendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseRecomendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
