//#region [DECLARATION]
import {
  Output,
  Component,
  AfterViewInit,
  EventEmitter,
  ViewChild, ElementRef
} from '@angular/core';
import { ProjectorService } from '../projector.service';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
//#endregion

export class DisplayerComponent implements AfterViewInit {
  //#region [VIEW-ELEMENTS]
  @ViewChild( 'can_display' ) canDisplayComp!:ElementRef;
  //#endregion
  //----------------------
  //#region [COMP-EVENTS]
  @Output( ) contentChanged = new EventEmitter( );
  //#endregion
  //----------------------
  //#region [COMP-METHODS]
  constructor( private stickerWallService:ProjectorService ) { }

  ngAfterViewInit( ) : void {
    console.log( "test" );
    let canvasDomEl = this.canDisplayComp.nativeElement;

    if (canvasDomEl) canvasDomEl.append(
      this.stickerWallService.getCanvasElement( )
    );
  }
  //#endregion
}
