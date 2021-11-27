import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcaptainsComponent } from './app_captains.component';

describe('AppcaptainsComponent', () => {
  let component: AppcaptainsComponent;
  let fixture: ComponentFixture<AppcaptainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcaptainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcaptainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
