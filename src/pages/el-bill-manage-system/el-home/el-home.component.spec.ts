import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElHomeComponent } from './el-home.component';

describe('ElHomeComponent', () => {
  let component: ElHomeComponent;
  let fixture: ComponentFixture<ElHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
