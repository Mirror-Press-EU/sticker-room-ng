import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { DisplayerComponent } from './displayer/displayer.component';



@NgModule({
  declarations: [
    PreviewComponent,
    DisplayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreviewComponent,
    DisplayerComponent
  ]
})
export class StickerWallModule { }
