import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesItemComponent } from './clothes-item.component';

describe('ClothesItemComponent', () => {
  let component: ClothesItemComponent;
  let fixture: ComponentFixture<ClothesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
