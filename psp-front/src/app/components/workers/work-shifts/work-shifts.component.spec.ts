import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShiftsComponent } from './work-shifts.component';

describe('WorkShiftsComponent', () => {
  let component: WorkShiftsComponent;
  let fixture: ComponentFixture<WorkShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
