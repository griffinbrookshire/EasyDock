import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dockerfile-output',
  templateUrl: './dockerfile-output.component.html',
  styleUrls: ['./dockerfile-output.component.css']
})
export class DockerfileOutput implements OnChanges {

  @Input() language: string = '';
  frameworksText: string = '';
  buildtoolsText: string = '';
  jenkinsText: string = '';
  dockerfileText: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.language)
    if (!changes['language'].firstChange)
      this.dockerfileText = 'FROM ' + changes['language'].currentValue;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.dockerfileText);
  }

}
