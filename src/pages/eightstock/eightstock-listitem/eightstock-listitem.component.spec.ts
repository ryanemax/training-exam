import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EightstockListitemComponent } from './eightstock-listitem.component';

describe('EightstockListitemComponent', () => {
  let component: EightstockListitemComponent;
  let fixture: ComponentFixture<EightstockListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EightstockListitemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EightstockListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
