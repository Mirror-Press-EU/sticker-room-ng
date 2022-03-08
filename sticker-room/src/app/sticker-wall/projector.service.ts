//#region [DECLARATION]
import {
  Inject,
  Injectable
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import StickerWallManager from 'src/assets/ts/stickerwall-js/libery/sticker-wall';

import Attachment from 'src/assets/ts/stickerwall-js/libery/attachments/attachment';
import Pin from 'src/assets/ts/stickerwall-js/libery/base/pin';

@Injectable({
  providedIn: 'root'
})

//#endregion

export class ProjectorService {
  //@ViewChild( 'can_display' ) canDisplayComp!: ElementRef;
  private canDisplayDiv:HTMLDivElement;
  private wallMngr:StickerWallManager;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  declareDisplayContainer( divDom:HTMLDivElement ) : void {
    this.canDisplayDiv = divDom;
  }

  prepairToStart( parentEl:any ) : void {
    parentEl.append( this.canDisplayDiv );
  }

  loadFromJSON( ) : void { }

  saveToJSON( ) : string {
    return this.wallMngr.exportFolderToJSON( );
  }

  addPinNode( newPinNode:Pin ) : void {
    this.wallMngr.addPinNode( newPinNode );
  }

  addAttachment( newAttachNode:Attachment ) : void {
    this.wallMngr.addAttachment( newAttachNode );
  }

  removeByID( nodeType:string, targetNodeID:string ) : void {
    //this.wallMngr.removeNodeById( nodeType, targetNodeID );
  }
}
