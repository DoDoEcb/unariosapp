import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class EditprofilePage {
 gender: string = "n64";
 interest: string = "n64";
  constructor(public navCtrl: NavController) {

  }

}
