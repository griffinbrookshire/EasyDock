import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'selection-lists-container',
  templateUrl: './selection-lists-container.component.html',
  styleUrls: ['./selection-lists-container.component.css']
})
export class SelectionListsContainer {

  @Output() updateDockerfileEvent = new EventEmitter<string>();

  updateDockerfile($event: string) {
    console.log($event)
    this.updateDockerfileEvent.emit($event);
  }

  selectionLists: any = [
    {
      "title": "Languages",
      "selections": [
        {
          "name": "Java",
          "dockerfileText": "openjdk:17"
        },
        {
          "name": "Python",
          "dockerfileText": "python:3"
        },
        {
          "name": "JavaScript",
          "dockerfileText": "node:16"
        },
      ]
    },
    {
      "title": "Frameworks",
      "selections": [
        {
          "name": "Angular",
          "dockerfileText": "node"
        },
        {
          "name": "React",
          "dockerfileText": "node"
        },
      ]
    },
    {
      "title": "Build Tools",
      "selections": [
        {
          "name": "Maven",
          "dockerfileText": "node"
        },
        {
          "name": "Gradle",
          "dockerfileText": "node"
        },
        {
          "name": "npm",
          "dockerfileText": "node"
        },
      ]
    },
    {
      "title": "Jenkins",
      "selections": [
        {
          "name": "Server",
          "dockerfileText": "node"
        },
        {
          "name": "Agent",
          "dockerfileText": "node"
        },
      ]
    },
  ];

}
