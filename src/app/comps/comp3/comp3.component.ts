import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/app-services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {

  userName:string='Pranjali';
  constructor( private _designUtility:DesignUtilityService){
    this._designUtility.userName.subscribe(res=>{
      this.userName=res;
    })
  }

  onChange(uname:string){

    this._designUtility.userName.next(uname)


  }

}
