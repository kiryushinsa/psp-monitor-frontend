import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactCallComponent } from './redact-call.component';

describe('RedactCallComponent', () => {
  let component: RedactCallComponent;
  let fixture: ComponentFixture<RedactCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedactCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
