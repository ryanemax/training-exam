import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmanageHomeComponent } from './bookmanage-home.component';

describe('BookmanageHomeComponent', () => {
  let component: BookmanageHomeComponent;
  let fixture: ComponentFixture<BookmanageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmanageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmanageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
