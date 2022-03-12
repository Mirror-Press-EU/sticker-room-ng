import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { DisplayerComponent } from './displayer/displayer.component';
import { FullDataPipe } from './pipe/full-data.pipe';
import { DiffDataPipe } from './pipe/diff-data.pipe';



@NgModule({
  declarations: [
    PreviewComponent,
    DisplayerComponent,
    FullDataPipe,
    DiffDataPipe
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
