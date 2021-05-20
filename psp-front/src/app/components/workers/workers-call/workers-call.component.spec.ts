import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCallComponent } from './workers-call.component';

describe('WorkersCallComponent', () => {
  let component: WorkersCallComponent;
  let fixture: ComponentFixture<WorkersCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
