import {Component, Input} from '@angular/core';


interface cellType {
  name: string;
}

// @ts-ignore
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],

})


export class CellComponent {
  types= ['Lorem ipsum', 'b', 'c'];
  selectedItem = 'Lorem ipsum';
  @Input() cellTypeControl: any;
}
