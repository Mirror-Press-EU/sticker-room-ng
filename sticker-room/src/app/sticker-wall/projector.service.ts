import {
  Inject, Injectable,
  ElementRef, ViewChild,
  Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import StickerWallManager from 'src/assets/ts/stickerwall-js/libery/sticker-wall';

import Attachment from 'src/assets/ts/stickerwall-js/libery/attachments/attachment';
import Pin from 'src/assets/ts/stickerwall-js/libery/base/pin';

@Injectable({
  providedIn: 'root'
})
export class ProjectorService {
  //@ViewChild( 'can_display' ) canDisplayComp!: ElementRef;
  private canDisplayComp:HTMLDivElement;
  private wallMngr:StickerWallManager = new StickerWallManager( );

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.canDisplayComp = new HTMLDivElement( );
    this.canDisplayComp.setAttribute( "id", "canvas-display" );
  }

  prepairToStart( parentEl:any ) : void {
    parentEl.append( this.canDisplayComp );
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
    this.wallMngr.removeNodeById( nodeType, targetNodeID );
  }
}
