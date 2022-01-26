import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGateComponent } from './edit-gate.component';

describe('EditGateComponent', () => {
  let component: EditGateComponent;
  let fixture: ComponentFixture<EditGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
