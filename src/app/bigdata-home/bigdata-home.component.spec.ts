import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigdataHomeComponent } from './bigdata-home.component';

describe('BigdataHomeComponent', () => {
  let component: BigdataHomeComponent;
  let fixture: ComponentFixture<BigdataHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigdataHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigdataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
