import { Pipe, PipeTransform } from '@angular/core';

import Pin from 'src/assets/ts/stickerwall-js/libery/base/pin';
import Attachment from 'src/assets/ts/stickerwall-js/libery/attachments/attachment';

export class FullMemoryData {
  private pins:Pin[];
  private attachs:Attachment[];

  constructor( allPins:Pin[]=[], allAttachs:Attachment[] ) {
    this.pins = allPins;
    this.attachs = allAttachs;
  }

  isEmpty( ) : boolean {
    return this.pins.length === 0
        && this.attachs.length === 0;
  }

  getPins( ) : Pin[] { return this.pins; }
  getAttachs( ) : Attachment[] { return this.attachs; }

  getValideJSON( ) : string {
    return JSON.stringify( {
      pins: this.pins,
      attachs: this.attachs
    } );
  }
}

@Pipe({
  name: 'fullData'
})
export class FullDataPipe implements PipeTransform {

  transform( folderContentJson: string ) : FullMemoryData {
    let jsonObj:any = JSON.parse( folderContentJson );

    if (jsonObj.pins instanceof Array
    &&  jsonObj.attachs instanceof Array) {
      let resData:FullMemoryData = new FullMemoryData(
        jsonObj.pins, jsonObj.attachs
      );

      if (!resData.isEmpty( )) return resData;
    }

    return null;
  }

}
