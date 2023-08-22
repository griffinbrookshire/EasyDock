import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionList } from './selection-list.component';

describe('SelectionListComponent', () => {
  let component: SelectionList;
  let fixture: ComponentFixture<SelectionList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionList]
    });
    fixture = TestBed.createComponent(SelectionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
