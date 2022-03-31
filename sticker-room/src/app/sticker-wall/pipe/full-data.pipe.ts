import { Pipe, PipeTransform } from '@angular/core';

import Pin from 'src/assets/ts/stickerwall-js/libery/base/pin';
import Attachment from 'src/assets/ts/stickerwall-js/libery/attachments/attachment';

export class FullMemoryData {
  private nodes:Pin[];
  private attachs:Attachment[];

  constructor( allPins:Pin[]=[], allAttachs:Attachment[] ) {
    this.nodes = allPins;
    this.attachs = allAttachs;
  }

  isEmpty( ) : boolean {
    return this.nodes.length === 0
        && this.attachs.length === 0;
  }

  getPins( ) : Pin[] { return this.nodes; }
  getAttachs( ) : Attachment[] { return this.attachs; }

  getValideJSON( ) : string {
    return JSON.stringify( {
      nodes: this.nodes,
      attachments: this.attachs
    } );
  }

  addNode( newNode:Pin ) {
    this.nodes.push( newNode );
  }

  addAttach( newAttach:Attachment ) {
    this.attachs.push( newAttach );
  }
}

@Pipe({
  name: 'fullData'
})
export class FullDataPipe implements PipeTransform {

  transform( folderContentJson: string ) : FullMemoryData {
    let jsonObj:any = JSON.parse( folderContentJson );

    if (jsonObj.nodes instanceof Array
    &&  jsonObj.attachs instanceof Array) {
      let resData:FullMemoryData = new FullMemoryData(
        jsonObj.nodes, jsonObj.attachs
      );

      if (!resData.isEmpty( )) return resData;
    }

    return null;
  }

}
