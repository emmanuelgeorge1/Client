import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCredsComponent } from './display-creds.component';

describe('DisplayCredsComponent', () => {
  let component: DisplayCredsComponent;
  let fixture: ComponentFixture<DisplayCredsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCredsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
