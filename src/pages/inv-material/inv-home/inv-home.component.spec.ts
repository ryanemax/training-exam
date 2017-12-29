import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvHomeComponent } from './inv-home.component';

describe('InvHomeComponent', () => {
  let component: InvHomeComponent;
  let fixture: ComponentFixture<InvHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
