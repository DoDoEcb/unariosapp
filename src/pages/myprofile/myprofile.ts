import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InsightPage } from '../insight/insight';
import { SettingPage } from '../setting/setting';
import { EditprofilePage } from '../editprofile/editprofile';
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html'
})
export class MyprofilePage {
all_about: string = "gallery";
  constructor(public navCtrl: NavController) {

  }
  
profile = [
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"},
    {image: "assets/imgs/man2.png"}
  ];

 insight(){
   this.navCtrl.push(InsightPage);
  } 
  
  setting(){
   this.navCtrl.push(SettingPage);
  }
  editprofile(){
   this.navCtrl.push(EditprofilePage);
  }
}
