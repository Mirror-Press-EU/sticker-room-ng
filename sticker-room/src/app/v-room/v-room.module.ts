import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RSidebarComponent } from './r-sidebar/r-sidebar.component';
import { RWallComponent } from './r-wall/r-wall.component';
import { RootComponent } from './root/root.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ZoomPanelComponent } from './zoom-panel/zoom-panel.component';

@NgModule({
  declarations: [
    RSidebarComponent,
    RWallComponent,
    RootComponent,
    ZoomPanelComponent,
  ],
  imports: [
    CommonModule,

    MaterialModule,
    SharedModule,
  ]
})
export class VRoomModule { }
