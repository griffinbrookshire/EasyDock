import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerPage } from './docker-page.component';

describe('DockerPageComponent', () => {
  let component: DockerPage;
  let fixture: ComponentFixture<DockerPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DockerPage]
    });
    fixture = TestBed.createComponent(DockerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
