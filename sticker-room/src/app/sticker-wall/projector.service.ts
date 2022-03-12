//#region [DECLARATION]
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import StickerWallManager from 'src/assets/ts/stickerwall-js/libery/sticker-wall';
import { ActionDiffData } from './pipe/diff-data.pipe';
import { FullDataPipe, FullMemoryData } from './pipe/full-data.pipe';

@Injectable({
  providedIn: 'root'
})
//#endregion

export class ProjectorService {

  private wallMngr:StickerWallManager;
  private lastActionClass = new Subject< ActionDiffData > ( );

  constructor( ) { }

  getInitData( folderID:string ): FullMemoryData {
    let dataPipe = new FullDataPipe( );
    return dataPipe.transform( JSON.stringify( {
      pins: [{
        id: "t1",
        type: "link-qoute",
        values: {
          "x": 0, "y": 0,
          "title": "t1",
          "text": "t11"
        }
      }, {
        id: "t2",
        type: "link-qoute",
        values: {
          "x": 0, "y": 300,
          "title": "t2",
          "text": "t22"
        }
      }],

      attachs: [{
        type: "connection",
        values: {
          from: {
            pinID: "t1",
            pos: {
              "type": "attachment-anker",
              "value": "BOTTOM"
            }
          },
          dest: {
            pinID: "t2",
            pos: {
              "type": "attachment-anker",
              "value": "TOP"
            }
          } 
        }
      }],
      
      view: {
        "pos": { "x":0, "y":0 },
        "scroll": 1.0
      }
    } ) );
  }

  loadFolder( folderID:string ) : void {
    let initData:FullMemoryData = this.getInitData( folderID );
    
    this.wallMngr.loadFromJSON( initData.getValideJSON( ) );
  }
  
  defineNewWallMngr( newManager:StickerWallManager ) {
    this.wallMngr = newManager;
  }
}
