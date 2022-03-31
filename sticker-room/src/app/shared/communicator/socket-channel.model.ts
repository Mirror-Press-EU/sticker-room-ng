import { SocketActions } from "./socket-actions.enum";

export class SocketChannel {
  constructor(
    public targetAction:SocketActions,
    public targetChannelID:string
  ) { }

  getJSON( ) : any {
    return {
      action: this.targetAction,
      channelID: this.targetChannelID
    };
  }
}
