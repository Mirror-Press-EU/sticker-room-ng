import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RSidebarComponent } from './r-sidebar/r-sidebar.component';
import { RWallComponent } from './r-wall/r-wall.component';



@NgModule({
  declarations: [
    RSidebarComponent,
    RWallComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VRoomModule { }
