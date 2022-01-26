import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminErrorComponent } from './admin-error.component';

describe('AdminErrorComponent', () => {
  let component: AdminErrorComponent;
  let fixture: ComponentFixture<AdminErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
