import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/app-services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

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
