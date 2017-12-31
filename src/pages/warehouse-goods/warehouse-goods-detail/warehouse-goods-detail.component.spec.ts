import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehoueGoodsDetailComponent } from './warehouse-goods-detail.component';

describe('WarehouseGoodsDetailComponent', () => {
  let component: WarehouseGoodsDetailComponent;
  let fixture: ComponentFixture<WarehouseGoodsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseGoodsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseGoodsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
