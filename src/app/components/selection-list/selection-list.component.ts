import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.css']
})
export class SelectionList {

  @Input() selectionData: any;
  @Output() selected = new EventEmitter<string>();

  valueSelected(selectedOption: any) {
    this.selected.emit(this.selectionData.propertyName + ':' + selectedOption.value);
  }

}
