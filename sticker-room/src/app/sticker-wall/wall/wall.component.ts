import { Output, Component, OnInit, EventEmitter } from '@angular/core';

import StickerWallManager from 'src/assets/ts/stickerwall-js/libery/sticker-wall';

import Attachment from 'src/assets/ts/stickerwall-js/libery/attachments/attachment';
import Pin from 'src/assets/ts/stickerwall-js/libery/base/pin';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent {
  @Output( ) contentChanged = new EventEmitter< number >( );
  pinMngr:StickerWallManager;

  constructor( ) {

  }

  loadFromJSON( ) : void {

  }

  saveToJSON( ) : string {
    return "";
  }

  addPinNode( newPinNode:Pin ) : void {

  }

  addAttachment( newAttachNode:Attachment ) : void {

  }

  removeByID( nodeType:string, targetNodeID:string ) : void {

  }

}
