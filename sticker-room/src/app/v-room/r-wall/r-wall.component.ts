import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-r-wall',
  templateUrl: './r-wall.component.html',
  styleUrls: ['./r-wall.component.scss']
})
export class RWallComponent implements OnInit {
  //@ViewChild('OpenUtilityListBtn') openUtilityListBtn!: ElementRef;

  createToolboxVisible:boolean = false;

  constructor( ) { }

  ngOnInit(): void {
  }

  openCreateQouteDialog( ) : void {

  }

  tgglCreateToolboxVisible( ) : void {
    this.createToolboxVisible = !this.createToolboxVisible;
  }

}
