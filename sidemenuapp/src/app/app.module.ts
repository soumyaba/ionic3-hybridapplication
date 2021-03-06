import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { PasswordPage } from '../pages/password/password';
import { CreatePage } from '../pages/create/create';
import { AuthServiceeProvider } from '../providers/auth-servicee/auth-servicee';
import { EmailComposer } from '@ionic-native/email-composer';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    PasswordPage,
    CreatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links:[
        {component:HomePage, name:"Home", segment:""}
    ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    PasswordPage,
    CreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceeProvider,
    EmailComposer
  ]
})
export class AppModule {}
