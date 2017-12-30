import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElAcctComponent } from './el-acct.component';

describe('ElAcctComponent', () => {
  let component: ElAcctComponent;
  let fixture: ComponentFixture<ElAcctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElAcctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElAcctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
