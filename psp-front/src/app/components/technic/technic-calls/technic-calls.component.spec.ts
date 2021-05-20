import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicCallsComponent } from './technic-calls.component';

describe('TechnicCallsComponent', () => {
  let component: TechnicCallsComponent;
  let fixture: ComponentFixture<TechnicCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
