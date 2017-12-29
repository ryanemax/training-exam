import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvItemComponent } from './inv-item.component';

describe('InvItemComponent', () => {
  let component: InvItemComponent;
  let fixture: ComponentFixture<InvItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
