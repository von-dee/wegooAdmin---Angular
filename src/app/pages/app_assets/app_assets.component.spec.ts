import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppassetsComponent } from './app_assets.component';

describe('AppassetsComponent', () => {
  let component: AppassetsComponent;
  let fixture: ComponentFixture<AppassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
