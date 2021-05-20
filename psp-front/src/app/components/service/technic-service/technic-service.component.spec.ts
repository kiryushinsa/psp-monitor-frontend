import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicServiceComponent } from './technic-service.component';

describe('TechnicServiceComponent', () => {
  let component: TechnicServiceComponent;
  let fixture: ComponentFixture<TechnicServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
