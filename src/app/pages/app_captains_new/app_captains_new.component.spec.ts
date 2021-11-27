import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcaptainsnewComponent } from './app_captains_new.component';

describe('AppcaptainsnewComponent', () => {
  let component: AppcaptainsnewComponent;
  let fixture: ComponentFixture<AppcaptainsnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcaptainsnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcaptainsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
