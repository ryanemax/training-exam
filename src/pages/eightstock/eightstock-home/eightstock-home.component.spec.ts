import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightstockHomeComponent } from './eightstock-home.component';

describe('EightstockHomeComponent', () => {
  let component: EightstockHomeComponent;
  let fixture: ComponentFixture<EightstockHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightstockHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightstockHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
