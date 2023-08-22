import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionListsContainer } from './selection-lists-container.component';

describe('SelectionListsContainerComponent', () => {
  let component: SelectionListsContainer;
  let fixture: ComponentFixture<SelectionListsContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionListsContainer]
    });
    fixture = TestBed.createComponent(SelectionListsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
