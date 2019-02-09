import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

structure: any = { lower: 33, upper: 60 };
  constructor(public navCtrl: NavController) {

  }

}
