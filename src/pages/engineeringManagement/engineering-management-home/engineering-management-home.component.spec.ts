import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringManagementHomeComponent } from './engineering-management-home.component';

describe('EngineeringManagementHomeComponent', () => {
  let component: EngineeringManagementHomeComponent;
  let fixture: ComponentFixture<EngineeringManagementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringManagementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
