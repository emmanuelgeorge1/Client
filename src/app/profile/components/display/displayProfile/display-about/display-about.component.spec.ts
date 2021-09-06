import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAboutComponent } from './display-about.component';

describe('DisplayAboutComponent', () => {
  let component: DisplayAboutComponent;
  let fixture: ComponentFixture<DisplayAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
