import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SelectMenuComponent implements OnChanges {
  @Input() options: any
  @Input() label!: string
  @Input() customWidth!: string
  @Input() unit!: string | undefined
  @Input() color!: string | undefined
  selectedOption!: string


  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
      this.ref.detectChanges(); // trigger change detection
    }
}
