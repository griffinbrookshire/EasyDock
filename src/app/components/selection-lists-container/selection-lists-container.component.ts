import { Component } from '@angular/core';

@Component({
  selector: 'selection-lists-container',
  templateUrl: './selection-lists-container.component.html',
  styleUrls: ['./selection-lists-container.component.css']
})
export class SelectionListsContainer {

selectionLists: any = [
  {
    "title": "Languages",
    "selections": [
      "Java",
      "Python",
      "JavaScript"
    ]
  },
  {
    "title": "Frameworks",
    "selections": [
      "Angular",
      "React"
    ]
  },
  {
    "title": "Build Tools",
    "selections": [
      "Maven",
      "Grade",
      "npm"
    ]
  },
  {
    "title": "Jenkins",
    "selections": [
      "Server",
      "Agent"
    ]
  },
];

}
