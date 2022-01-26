import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistergreetingComponent } from './registergreeting.component';

describe('RegistergreetingComponent', () => {
  let component: RegistergreetingComponent;
  let fixture: ComponentFixture<RegistergreetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistergreetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistergreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
