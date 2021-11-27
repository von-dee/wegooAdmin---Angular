import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Appnewrequests } from './app_newrequests.component';

describe('Appnewrequests', () => {
  let component: Appnewrequests;
  let fixture: ComponentFixture<Appnewrequests>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appnewrequests ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appnewrequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
