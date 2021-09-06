import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEducationComponent } from './display-education.component';

describe('DisplayEducationComponent', () => {
  let component: DisplayEducationComponent;
  let fixture: ComponentFixture<DisplayEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
