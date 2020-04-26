import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFocusComponent } from './list-focus.component';

describe('ListFocusComponent', () => {
  let component: ListFocusComponent;
  let fixture: ComponentFixture<ListFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
