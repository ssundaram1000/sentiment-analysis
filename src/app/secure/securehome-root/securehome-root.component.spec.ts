import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurehomeRootComponent } from './securehome-root.component';

describe('SecurehomeRootComponent', () => {
  let component: SecurehomeRootComponent;
  let fixture: ComponentFixture<SecurehomeRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurehomeRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurehomeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
