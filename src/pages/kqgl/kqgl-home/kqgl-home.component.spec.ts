import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqglHomeComponent } from './kqgl-home.component';

describe('KqglHomeComponent', () => {
  let component: KqglHomeComponent;
  let fixture: ComponentFixture<KqglHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqglHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqglHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
