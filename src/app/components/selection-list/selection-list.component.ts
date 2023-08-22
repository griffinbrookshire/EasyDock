import { Component, Input } from '@angular/core';

@Component({
  selector: 'selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.css']
})
export class SelectionList {

  @Input() selectionData: any;

}
