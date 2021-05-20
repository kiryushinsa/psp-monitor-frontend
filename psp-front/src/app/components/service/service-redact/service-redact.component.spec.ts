import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRedactComponent } from './service-redact.component';

describe('ServiceRedactComponent', () => {
  let component: ServiceRedactComponent;
  let fixture: ComponentFixture<ServiceRedactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRedactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRedactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
