import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QouteComponent } from './qoute/qoute.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    QouteComponent
  ],
  imports: [
    CommonModule,

    // UX & UI
    MaterialModule,
  ],
  exports: [
    QouteComponent
  ]
})
export class ModifyDialogsModule { }
