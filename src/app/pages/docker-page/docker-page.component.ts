import { Component } from '@angular/core';

@Component({
  selector: 'docker-page',
  templateUrl: './docker-page.component.html',
  styleUrls: ['./docker-page.component.css']
})
export class DockerPage {

  dockerfileText: string = '';

  updateDockerfile($event: string) {
    this.dockerfileText = $event;
  }

  language: string = 'FROM openjdk:17'

}
