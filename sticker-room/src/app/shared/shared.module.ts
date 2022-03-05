import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDisplayComponent } from './chat-display/chat-display.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ChatDisplayComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ChatDisplayComponent
  ]
})
export class SharedModule { }
