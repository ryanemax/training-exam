import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesHomeComponent } from './clothes-home.component';

describe('ClothesHomeComponent', () => {
  let component: ClothesHomeComponent;
  let fixture: ComponentFixture<ClothesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
