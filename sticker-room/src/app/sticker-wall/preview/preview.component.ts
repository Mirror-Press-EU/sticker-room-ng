import {
  Component,
  Input,
  AfterViewInit,
  ViewChild, ElementRef
} from '@angular/core';

import StickerWallManager from 'src/assets/ts/stickerwall-js/libery/sticker-wall';

import Attachment from 'src/assets/ts/stickerwall-js/libery/attachments/attachment';
import Pin from 'src/assets/ts/stickerwall-js/libery/base/pin';
import { ProjectorService } from '../projector.service';
import PinFolder from 'src/assets/ts/stickerwall-js/libery/pin-folder';
import { FullMemoryData } from '../pipe/full-data.pipe';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  constructor( ) { }

}
