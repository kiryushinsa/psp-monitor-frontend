import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersRedactComponent } from './workers-redact.component';

describe('WorkersRedactComponent', () => {
  let component: WorkersRedactComponent;
  let fixture: ComponentFixture<WorkersRedactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersRedactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersRedactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
