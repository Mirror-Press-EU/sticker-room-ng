import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-r-wall',
  templateUrl: './r-wall.component.html',
  styleUrls: ['./r-wall.component.scss']
})

export class RWallComponent implements AfterViewInit {
  @ViewChild( 'can_display' ) canDisplayComp!: ElementRef;
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
}
