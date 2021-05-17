import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicCreateComponent } from './technic-create.component';

describe('TechnicCreateComponent', () => {
  let component: TechnicCreateComponent;
  let fixture: ComponentFixture<TechnicCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
