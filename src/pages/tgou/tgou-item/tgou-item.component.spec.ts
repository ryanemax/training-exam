import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgouItemComponent } from './tgou-item.component';

describe('TgouItemComponent', () => {
  let component: TgouItemComponent;
  let fixture: ComponentFixture<TgouItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgouItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgouItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
