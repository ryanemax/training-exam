import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoHomeComponent } from './personal-info-home.component';

describe('PersonalInfoHomeComponent', () => {
  let component: PersonalInfoHomeComponent;
  let fixture: ComponentFixture<PersonalInfoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
