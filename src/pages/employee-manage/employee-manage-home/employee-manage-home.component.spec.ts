import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManageHomeComponent } from './employee-manage-home.component';

describe('EmployeeManageHomeComponent', () => {
  let component: EmployeeManageHomeComponent;
  let fixture: ComponentFixture<EmployeeManageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeManageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
