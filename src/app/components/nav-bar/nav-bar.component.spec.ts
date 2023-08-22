import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBar } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBar;
  let fixture: ComponentFixture<NavBar>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBar]
    });
    fixture = TestBed.createComponent(NavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
