import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicListComponent } from './technic-list.component';

describe('TechnicListComponent', () => {
  let component: TechnicListComponent;
  let fixture: ComponentFixture<TechnicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
