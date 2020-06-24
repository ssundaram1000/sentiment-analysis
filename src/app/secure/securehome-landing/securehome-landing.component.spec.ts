import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurehomeLandingComponent } from './securehome-landing.component';

describe('SecurehomeLandingComponent', () => {
  let component: SecurehomeLandingComponent;
  let fixture: ComponentFixture<SecurehomeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurehomeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurehomeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
