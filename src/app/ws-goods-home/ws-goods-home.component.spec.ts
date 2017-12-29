import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsGoodsHomeComponent } from './ws-goods-home.component';

describe('WsGoodsHomeComponent', () => {
  let component: WsGoodsHomeComponent;
  let fixture: ComponentFixture<WsGoodsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsGoodsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsGoodsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
