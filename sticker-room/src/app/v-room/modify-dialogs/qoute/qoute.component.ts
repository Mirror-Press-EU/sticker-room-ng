import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.scss']
})
export class QouteComponent implements OnInit {

  @ViewChild( 'inputTitle' ) formTitleEl:ElementRef;
  @ViewChild( 'inputContent' ) formContentEl:ElementRef;
  
  applyText:string;

  constructor( public dialog: MatDialog ) { }

  openDialog( ) {
    const dialogRef = this.dialog.open( QouteComponent );

    dialogRef.afterClosed( ).subscribe(
      (res)=> console.log( `Dialog result: ${res}`, this.formTitleEl )
    );
  }

  ngOnInit(): void {
  }

}
