import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationEngineeringManagementHomeComponent } from './decoration-engineering-management-home.component';

describe('DecorationEngineeringManagementHomeComponent', () => {
  let component: DecorationEngineeringManagementHomeComponent;
  let fixture: ComponentFixture<DecorationEngineeringManagementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorationEngineeringManagementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationEngineeringManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
