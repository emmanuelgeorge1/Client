import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGithubComponent } from './display-github.component';

describe('DisplayGithubComponent', () => {
  let component: DisplayGithubComponent;
  let fixture: ComponentFixture<DisplayGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
