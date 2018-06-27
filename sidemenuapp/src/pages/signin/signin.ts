import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPush, Nav, ToastController } from 'ionic-angular';
import { PasswordPage } from '../password/password';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements OnInit {
  public passwordPage: any;
  public homePage: any;
  public signinform: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder, private nav:Nav, public toastCtrl: ToastController) {
    this.passwordPage = PasswordPage;
    this.homePage = HomePage;
  }
ngOnInit() {
  this.signinform =this.fb.group({
    username : ['',Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    password: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'), Validators.required])]
        });
}
  ionViewDidLoad() {

  }
signin(signinform) {
  console.log(signinform);
  if(signinform.value.username === ''){
let empty = 'Username is required';
this.presentToast(empty);
 }else if(signinform.value.username !== 'username') {
let text = 'Username is invalid';
this.presentToast(text);
  }else if(signinform.value.password === '') {
    let text = 'Password is required';
    this.presentToast(text);
  }else if(signinform.value.password !== 'password') {
    let text = 'Invalid Password';
    this.presentToast(text);
  }else {
    this.nav.setRoot(HomePage);
  }
}
presentToast(text) {
  const toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    cssClass:'background_toast_usename'
  });
  toast.present(toast);
}

}
