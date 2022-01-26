import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyGateComponent } from './apply-gate.component';

describe('ApplyGateComponent', () => {
  let component: ApplyGateComponent;
  let fixture: ComponentFixture<ApplyGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
