import { AnimationStaggerMetadata } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

import { CommunicatorService } from '../communicator/communicator.service';
import { UserMessage } from './user-message.model';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss']
})
export class ChatDisplayComponent implements AfterViewInit {

  @ViewChild( 'msgTextBox' ) msgTextBox!: ElementRef;

  convHistory:UserMessage[] = [];
  txtInputEmpty:boolean = false;

  constructor(
    private comService:CommunicatorService
  ) { }

  public ngAfterViewInit( ): void {
    this.comService.onNextMessage.subscribe(
      (incomingMsg:UserMessage) => this.convHistory.push( incomingMsg )
    );
  }

  public resizeTextBox( ) : void {
    let areaInp:any = this.msgTextBox.nativeElement;
    
    this.txtInputEmpty = areaInp.value !== "";

    areaInp.style.cssText = 'height:auto; padding:0';
    areaInp.style.cssText = 'height:' + (areaInp.scrollHeight) + 'px';
  }

  public onSendMessageBtnClicked( ) : void {
    this.comService.sendMessage( this.msgTextBox.nativeElement.value );
    this.msgTextBox.nativeElement.value = "";
    this.resizeTextBox( );
  }

}
