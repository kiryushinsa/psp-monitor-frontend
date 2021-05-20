import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicRedactComponent } from './technic-redact.component';

describe('TechnicRedactComponent', () => {
  let component: TechnicRedactComponent;
  let fixture: ComponentFixture<TechnicRedactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicRedactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicRedactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
