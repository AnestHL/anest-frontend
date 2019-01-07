import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLandingComponent } from './cover-landing.component';

describe('CoverLandingComponent', () => {
  let component: CoverLandingComponent;
  let fixture: ComponentFixture<CoverLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
