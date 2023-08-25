import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerfileOutput } from './dockerfile-output.component';

describe('DockerfileOutputComponent', () => {
  let component: DockerfileOutput;
  let fixture: ComponentFixture<DockerfileOutput>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DockerfileOutput]
    });
    fixture = TestBed.createComponent(DockerfileOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
