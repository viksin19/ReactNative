import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalInputComponent } from './physical-input.component';

describe('PhysicalInputComponent', () => {
  let component: PhysicalInputComponent;
  let fixture: ComponentFixture<PhysicalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
