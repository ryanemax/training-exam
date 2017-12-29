import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LipstickListComponent } from './lipstick-list.component';

describe('LipstickListComponent', () => {
  let component: LipstickListComponent;
  let fixture: ComponentFixture<LipstickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LipstickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LipstickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
