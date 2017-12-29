import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgouMallComponent } from './tgou-mall.component';

describe('TgouMallComponent', () => {
  let component: TgouMallComponent;
  let fixture: ComponentFixture<TgouMallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgouMallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgouMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
