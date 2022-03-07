import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { WallComponent } from './wall/wall.component';



@NgModule({
  declarations: [
    PreviewComponent,
    WallComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StickerWallModule { }
