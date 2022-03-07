import { Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent {
  @Output( ) contentChanged = new EventEmitter( );

  constructor( ) {

  }

}
