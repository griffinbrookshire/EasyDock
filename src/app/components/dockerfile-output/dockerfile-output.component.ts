import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dockerfile-output',
  templateUrl: './dockerfile-output.component.html',
  styleUrls: ['./dockerfile-output.component.css']
})
export class DockerfileOutput implements OnChanges {

  @Input() os: string = '';
  @Input() language: string = '';
  @Input() framework: string = '';
  @Input() buildtools: string = '';
  @Input() jenkins: string = '';
  @Input() cloud: string = '';
  dockerfileText: string = '';
  inputHeight: number = 32;

  ngOnChanges(changes: SimpleChanges): void {
    let jsonChanges = JSON.parse(JSON.stringify(changes));
    for (const change in jsonChanges) {
      if (jsonChanges[change].firstChange) return
    }
      
    this.dockerfileText =
        this.changesToDockerfileText(changes, 'os')
      + this.changesToDockerfileText(changes, 'language')
      + this.changesToDockerfileText(changes, 'framework')
      + this.changesToDockerfileText(changes, 'buildtools')
      + this.changesToDockerfileText(changes, 'jenkins')
      + this.changesToDockerfileText(changes, 'cloud')

    this.setHeight();
  }

  changesToDockerfileText(changes: SimpleChanges, key: string) {
    if (changes && changes[key]) {
      return changes[key].currentValue + '\n\n';
    }
    const val = (this as any)[key];
    return val ? val + '\n\n' : '';
  }

  setHeight() {
    var numLines = 0;
    var charsInLine = 0;
    for (let i=0; i < this.dockerfileText.length; i++) {
      if (this.dockerfileText.charAt(i) == '\n') {
        numLines++;
        charsInLine = 0;
        continue;
      }
      charsInLine++;
      if (charsInLine % 60 == 0) {
        numLines++;
      }
    }
    this.inputHeight = numLines*16;
  }

  clientDownload() {
    const fileName = 'Dockerfile';
    const file = new Blob([this.dockerfileText], { type: "text/text" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    link.remove();
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.dockerfileText);
  }

  resetDockerfile() {
    this.dockerfileText = '\n\n';
    this.os = '';
    this.language = '';
    this.framework = '';
    this.buildtools = '';
    this.jenkins = '';
    this.cloud = '';
    this.setHeight();
  }

}
