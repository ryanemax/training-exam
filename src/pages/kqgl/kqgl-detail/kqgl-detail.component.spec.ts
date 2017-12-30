import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KqglDetailComponent } from './kqgl-detail.component';

describe('KqglDetailComponent', () => {
  let component: KqglDetailComponent;
  let fixture: ComponentFixture<KqglDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KqglDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KqglDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
