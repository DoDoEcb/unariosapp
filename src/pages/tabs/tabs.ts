import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';

import { MyprofilePage } from '../myprofile/myprofile';
import { ContactlistPage } from '../contactlist/contactlist';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

@ViewChild('myTabs') tabRef: Tabs;

ionViewDidEnter() {
  this.tabRef.select(1);
 }

  tab1Root = MyprofilePage;
  tab2Root = HomePage;
  tab3Root = ContactlistPage;

  constructor() {

  }
 
}
  
   