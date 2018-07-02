import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AuthServiceeProvider } from '../../providers/auth-servicee/auth-servicee';
import { SigninPage } from '../signin/signin';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController, private authservice:AuthServiceeProvider) {
// console.log(localStorage.getItem('username'));
if(localStorage.getItem('username') === null && localStorage.getItem('password') === null) {
this.nav.push(SigninPage);
}




  }

}
