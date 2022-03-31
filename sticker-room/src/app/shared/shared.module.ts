import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { ChatDisplayComponent } from './chat-display/chat-display.component';
import { MaterialModule } from '../material/material.module';
import { CommunicatorModule } from './communicator/communicator.module';

const config: SocketIoConfig = { url: 'ws://localhost:3030', options: { } };

@NgModule({
  declarations: [
    ChatDisplayComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    //CommunicatorModule
    SocketIoModule.forRoot(config)
  ],
  exports: [
    ChatDisplayComponent
  ]
})
export class SharedModule { }
