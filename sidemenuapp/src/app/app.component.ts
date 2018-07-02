import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SigninPage } from '../pages/signin/signin';
import { LogoutPage } from '../pages/logout/logout';
import { ExitPage } from '../pages/exit/exit';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SigninPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      {title: 'Exit', component:ExitPage},
      {title : 'Logout', component: LogoutPage }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title === 'Logout') {
      this.showConfirm();
    }else if(page.title === 'Exit'){
      this.nav.push(SigninPage);
    }else {
    this.nav.setRoot(page.component);
    }
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Logout?',
      message: 'Are you sure to logout?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
         //   console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            localStorage.clear();
            this.nav.push(SigninPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
