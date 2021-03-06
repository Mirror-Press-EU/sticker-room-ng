import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { VRoomModule } from './v-room/v-room.module';
import { VOverviewModule } from './v-overview/v-overview.module';
import { StickerWallModule } from './sticker-wall/sticker-wall.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // UX & UI
    MaterialModule,
    SharedModule,

    // Views
    VRoomModule,
    VOverviewModule,
    StickerWallModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
