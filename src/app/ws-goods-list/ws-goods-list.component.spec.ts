import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsGoodsListComponent } from './ws-goods-list.component';

describe('WsGoodsListComponent', () => {
  let component: WsGoodsListComponent;
  let fixture: ComponentFixture<WsGoodsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsGoodsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsGoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
