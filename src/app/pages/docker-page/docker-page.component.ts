import { Component } from '@angular/core';

@Component({
  selector: 'docker-page',
  templateUrl: './docker-page.component.html',
  styleUrls: ['./docker-page.component.css']
})
export class DockerPage {

  os: string = '';
  language: string = '';
  framework: string = '';
  buildtools: string = '';
  jenkins: string = '';
  cloud: string = '';

  updateDockerfile($event: string) {
    var propertyName: string = $event.substring(0, $event.indexOf(':'));
    var propertyValue: string = $event.substring($event.indexOf(':')+1);
    (this as any)[propertyName] = propertyValue;
  }

}
