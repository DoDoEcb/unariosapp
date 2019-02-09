import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatPage } from '../pages/chat/chat';
import { ContactlistPage } from '../pages/contactlist/contactlist';
import { DestinoproPage } from '../pages/destinopro/destinopro';
import { DestinoproupPage } from '../pages/destinoproup/destinoproup';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { HomePage } from '../pages/home/home';
import { InsightPage } from '../pages/insight/insight';
import { MatchPage } from '../pages/match/match';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileimgPage } from '../pages/profileimg/profileimg';
import { SettingPage } from '../pages/setting/setting';
import { SplashPage } from '../pages/splash/splash';
import { TabsPage } from '../pages/tabs/tabs';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    ContactlistPage,
    DestinoproPage,
    DestinoproupPage,
    EditprofilePage,
    HomePage,
    InsightPage,
    MatchPage,
    MyprofilePage,
    ProfilePage,
    ProfileimgPage,
    SettingPage,
    SplashPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    ContactlistPage,
    DestinoproPage,
    DestinoproupPage,
    EditprofilePage,
    HomePage,
    InsightPage,
    MatchPage,
    MyprofilePage,
    ProfilePage,
    ProfileimgPage,
    SettingPage,
    SplashPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
