import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { SocketChannel } from 'src/app/shared/communicator/socket-channel.model';
import { SocketAction } from 'src/app/shared/communicator/socket-action.model';
import { SocketActions } from 'src/app/shared/communicator/socket-actions.enum';
import { UserMessage } from '../chat-display/user-message.model';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService /*implements OnInit*/ {

  @Output( ) onNextMessage = new EventEmitter( );

  socket:WebSocket = new WebSocket( 'ws://localhost:3030' );

  targetChannel:SocketChannel = new SocketChannel( SocketActions.CONVERSATION, "001" );

  constructor( /*private socket: Socket*/ ) {
    this.ngOnInit( );
  }

  ngOnInit( ) : void {
    console.log( "online!" );
    let scope = this;
    let socket = this.socket;

    socket.onopen = ()=> {
      socket.onmessage = (evt) => {
        scope.receivedPackage( evt );
      }
    };
  }

  //#region HTTP - REQUESTS
  getConversation( ) : void { }
//#endregion HTTP - REQUESTS

  sendMessage( msgText:string ) : void {
    let dataPackage:SocketAction = this.buildTcpActionData(
      SocketActions.CONVERSATION,
      new UserMessage( "ich", "001", 0, msgText )
    );

    this.wsEmit( dataPackage );
  }

  receivedMessage( data:any ) : void {
    if (data.text === undefined) return;

    console.log( "[RECEIVED]", data );
    this.onNextMessage.emit( data );
  }
  
  receivedPackage( event:any ) {
    let response:any = JSON.parse( event.data );

    if (response.event && response.message) {
      switch(response.event) {
        case SocketActions.CONVERSATION: this.receivedMessage( response.message ); break;
      }
    }

  }
  //#region TCP - COMMUNICATE
  private buildTcpActionData( actionType:SocketActions, jsonData:any ) : SocketAction {
    return new SocketAction( this.targetChannel, actionType, jsonData );
  }

  private wsEmit( content:SocketAction ) {
    this.socket.send(
      JSON.stringify( content.getJSON( ) )
    );
  }
  //#endregion TCP - COMMUNICATE

  
  
}
