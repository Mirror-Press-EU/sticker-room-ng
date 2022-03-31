import { SocketActions } from "./socket-actions.enum";
import { SocketChannel } from "./socket-channel.model";

export class SocketAction {
  constructor(
    public targetChannel:SocketChannel,
    public actionType:SocketActions,
    public jsonData:any
  ) { }

  getJSON( ): any {
    return {
      event: this.actionType,
      channel: this.targetChannel,
      data: this.jsonData
    };
  }
}
