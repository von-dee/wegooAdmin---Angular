import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstaffComponent } from './app_staff.component';

describe('AppstaffComponent', () => {
  let component: AppstaffComponent;
  let fixture: ComponentFixture<AppstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
