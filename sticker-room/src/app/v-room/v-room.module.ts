import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RSidebarComponent } from './r-sidebar/r-sidebar.component';
import { RWallComponent } from './r-wall/r-wall.component';
import { RootComponent } from './root/root.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ZoomPanelComponent } from './zoom-panel/zoom-panel.component';
import { StickerWallModule } from '../sticker-wall/sticker-wall.module';
import { ModifyDialogsModule } from './modify-dialogs/modify-dialogs.module';

@NgModule({
  declarations: [
    RSidebarComponent,
    RWallComponent,
    RootComponent,
    ZoomPanelComponent,
  ],
  imports: [
    // FRAMEWORK
    CommonModule,

    // CHILD-PACKAGES,
    ModifyDialogsModule,

    // PACKAGES
    MaterialModule,
    SharedModule,
    StickerWallModule,
  ]
})
export class VRoomModule { }
