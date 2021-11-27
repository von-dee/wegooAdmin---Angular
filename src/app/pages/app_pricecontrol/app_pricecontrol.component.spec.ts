import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppricecontrolComponent } from './app_pricecontrol.component';

describe('ApppricecontrolComponent', () => {
  let component: ApppricecontrolComponent;
  let fixture: ComponentFixture<ApppricecontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApppricecontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApppricecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
