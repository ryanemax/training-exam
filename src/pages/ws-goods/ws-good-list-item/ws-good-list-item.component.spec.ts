import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsGoodListItemComponent } from './ws-good-list-item.component';

describe('WsGoodListItemComponent', () => {
  let component: WsGoodListItemComponent;
  let fixture: ComponentFixture<WsGoodListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsGoodListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsGoodListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
