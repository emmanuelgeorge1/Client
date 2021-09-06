import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExperienceComponent } from './display-experience.component';

describe('DisplayExperienceComponent', () => {
  let component: DisplayExperienceComponent;
  let fixture: ComponentFixture<DisplayExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
