import { Pipe, PipeTransform } from '@angular/core';
import { UserActions } from './user-actions';

export class ActionDiffData {
  type:UserActions;
  values:any;
  timestamp:string;

  constructor( t:UserActions, v:any, ts:string ) {
    this.type = t;
    this.values = v;
    this.timestamp = ts;
  }
}

@Pipe({
  name: 'diffData'
})
export class DiffDataPipe implements PipeTransform {

  transform(
  actionType:UserActions,
  changedNodeValuesJson:string, 
  timestamp:string
  ): any {
    let resJsonObj:any = JSON.parse( changedNodeValuesJson );

    return new ActionDiffData( actionType, resJsonObj, timestamp );
  }

}
