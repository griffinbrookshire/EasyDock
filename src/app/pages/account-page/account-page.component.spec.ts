import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPage } from './account-page.component';

describe('AccountPageComponent', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPage]
    });
    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
