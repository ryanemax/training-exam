import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsGoodsDetailComponent } from './ws-goods-detail.component';

describe('WsGoodsDetailComponent', () => {
  let component: WsGoodsDetailComponent;
  let fixture: ComponentFixture<WsGoodsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsGoodsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsGoodsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
