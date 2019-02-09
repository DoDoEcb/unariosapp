import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DestinoproPage } from '../destinopro/destinopro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
   profile(){
   this.navCtrl.push(ProfilePage);
  }
 destinopro(){
   this.navCtrl.push(DestinoproPage);
  }
}
