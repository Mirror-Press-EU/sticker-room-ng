//#region [DECLARATION]
import {
  Output,
  Component,
  AfterViewInit,
  EventEmitter,
  ViewChild, ElementRef, Input
} from '@angular/core';
import StickerWallManager from 'src/assets/ts/stickerwall-js/libery/sticker-wall';
import { ProjectorService } from '../projector.service';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
//#endregion

export class DisplayerComponent implements AfterViewInit {

  //#region [VIEW-ELEMENTS]
  @ViewChild( 'can_display' ) canDisplayComp!: ElementRef;
  //#endregion
  //----------------------
  //#region [COMP-EVENTS]
  @Output( ) contentChanged = new EventEmitter( );
  //#endregion
  //----------------------
  //#region [COMP-PARAM]
  @Input( 'folder-id' ) folderID: string;
  //#endregion
  //----------------------
  //#region [COMP-ATTR]
//  private folderManager;
  //#endregion
  //----------------------
  //#region [COMP-METHODS]

  constructor( private folderService:ProjectorService ) { }

  ngAfterViewInit( ): void {

    if (this.folderID) {
      this.folderService.defineNewWallMngr( new StickerWallManager( ) );
      this.folderService.loadFolder( this.folderID );
    }
    
  }

  //#endregion


  /*declareDisplayContainer( divDom:HTMLDivElement ) : void {
    this.canDisplayDiv = divDom;
  }

  prepairToStart( parentEl:any ) : void {
    parentEl.append( this.canDisplayDiv );
  }*/

}
