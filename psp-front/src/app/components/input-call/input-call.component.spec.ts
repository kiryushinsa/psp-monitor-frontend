import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCallComponent } from './input-call.component';

describe('InputCallComponent', () => {
  let component: InputCallComponent;
  let fixture: ComponentFixture<InputCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
