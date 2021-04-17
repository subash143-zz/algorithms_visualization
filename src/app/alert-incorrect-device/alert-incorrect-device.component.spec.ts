import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertIncorrectDeviceComponent } from './alert-incorrect-device.component';

describe('AlertIncorrectDeviceComponent', () => {
  let component: AlertIncorrectDeviceComponent;
  let fixture: ComponentFixture<AlertIncorrectDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertIncorrectDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertIncorrectDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
