import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseGoodsHomeComponent } from './warehouse-goods-home.component';

describe('WarehouseGoodsHomeComponent', () => {
  let component: WarehouseGoodsHomeComponent;
  let fixture: ComponentFixture<WarehouseGoodsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseGoodsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseGoodsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
