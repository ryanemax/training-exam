import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManageListComponent } from './employee-manage-list.component';

describe('EmployeeManageListComponent', () => {
  let component: EmployeeManageListComponent;
  let fixture: ComponentFixture<EmployeeManageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeManageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
