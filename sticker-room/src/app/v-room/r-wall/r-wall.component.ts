import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import Attachment from 'src/assets/ts/stickerwall-js/libery/attachments/attachment';
import Pin from 'src/assets/ts/stickerwall-js/libery/base/pin';

@Component({
  selector: 'app-r-wall',
  templateUrl: './r-wall.component.html',
  styleUrls: ['./r-wall.component.scss']
})

export class RWallComponent implements AfterViewInit {
  @ViewChild( 'can_displayer' ) canDisplayComp!: ElementRef;
  @ViewChild( 'zoom_panel' ) zoomPanelComp!: any;

  createToolboxVisible:boolean = false;

  constructor( ) { }

  ngAfterViewInit( ) : void {
    let canvasDomEl = this.canDisplayComp.nativeElement;

    if (canvasDomEl) canvasDomEl.addEventListener(
      "click", ()=> this.zoomPanelComp.closeToolbox( )
    );
  }

  openCreateQouteDialog( ) : void {

  }

  tgglCreateToolboxVisible( ) : void {
    this.createToolboxVisible = !this.createToolboxVisible;
  }

  closeCreateToolbox( ) : void {
    this.createToolboxVisible = false;
  }

  setWallFrameDisance( evt ) : any {
    console.log( evt );
  }


  addPinNode( newPinNode:Pin ) : void {
    //this.wallMngr.addPinNode( newPinNode );
  }

  addAttachment( newAttachNode:Attachment ) : void {
    //this.wallMngr.addAttachment( newAttachNode );
  }
}
