import {
  Output,
  EventEmitter,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-zoom-panel',
  templateUrl: './zoom-panel.component.html',
  styleUrls: ['./zoom-panel.component.scss']
})

export class ZoomPanelComponent implements OnInit {
  @Output( ) changedScale = new EventEmitter< number >( );


  scale:number = 100;
  open:boolean = false;


  constructor() { }

  ngOnInit() : void {
  }

  formatLabel(value: number) : string {
    return value + "%";
  }

  toggleVisible( ) : void {
    this.open = !this.open;
  }

  closeToolbox( ) : void {
    this.open = false;
  }

  triggerScaleValueChanged( newScaleValue:number) : void {
    this.changedScale.emit( newScaleValue );
  }
}
